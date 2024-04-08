import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WebCamViewer = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [modelLoaded, setModelLoaded] = useState(false);

    useEffect(() => {
        const startWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing webcam:', error);
            }
        };

        startWebcam();

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
            }
        };
    }, []);

    useEffect(() => {
        // Load the YOLO model
        async function loadModel() {
            try {
                // Fetch the YOLO model from your backend server
                await fetch('/api/load_model');
                setModelLoaded(true);
            } catch (error) {
                console.error('Error loading model:', error);
            }
        }

        loadModel();
    }, []);

    useEffect(() => {
        // Function to send frame to backend for object detection
        const sendFrameForDetection = async () => {
            if (!modelLoaded || !videoRef.current || !canvasRef.current) return;

            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/jpeg');

            try {
                const response = await fetch('/api/detect', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ image: imageData }),
                });

                if (response.ok) {
                    const data = await response.json();
                    // Handle detection results here
                    console.log('Detection results:', data.results);
                } else {
                    console.error('Error detecting objects');
                }
            } catch (error) {
                console.error('Error detecting objects:', error);
            }
        };

        // Send frame for detection every 1 second
        const intervalId = setInterval(sendFrameForDetection, 1000);

        // Cleanup function
        return () => clearInterval(intervalId);
    }, [modelLoaded]);

    return (
        <div className='flex container-md justify-between sm:ml-56  px-4 sm:pt-20 bg-white border-2'>
            <div className='flex flex-col w-full '>
                <div className="container background-gray rounded-md flex h-80">
                    <div className="user-information w-4/6 h-full p-3">
                        <h2>User Details</h2>
                    </div>
                    <div className="bg-black h-full w-2/6">
                        {videoRef && (
                            <video ref={videoRef} autoPlay playsInline />
                        )}
                        {!videoRef && (
                            <h3 className='text-white'>Waiting for the camera to be accessed...</h3>
                        )}
                        <canvas ref={canvasRef} style={{ display: 'none' }} />
                    </div>
                </div>
                <div className='mt-4'>
                    <button type="button" className="text-white background-green  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2" onClick={() => navigate('/admin')}>Admin</button>
                </div>
            </div>
        </div>
    );
};

export default WebCamViewer;
