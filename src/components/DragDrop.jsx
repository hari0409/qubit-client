"use client";
import { Box, Button, ButtonGroup, Spinner } from "@chakra-ui/react";
import { useRef, useState } from "react";

// drag drop file componen
export const DragDrop = () => {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);

    // ref
    const inputRef = useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        console.log("File uploading");
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        console.log("File uploading");
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = (data) => {
        setLoading(true)
        setTimeout(() => {
            console.log("Processing");
            setLoading(false);
            setDone(true);
        }, 2000);
    }

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    const handleTryAgain = () => {
        setDragActive(false);
        setDone(false);
        setLoading(false);
    }

    return (
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                <div>
                    <p style={{fontSize:"24px"}}>Drag and drop your file here or</p>
                    <button className="upload-button" onClick={onButtonClick} style={{fontSize:"18px"}}>Upload a file</button>
                </div>
            </label>
            <Box m="10px">
                {
                    done ? <>
                        <ButtonGroup>
                            <Button >Download Obfuscated file</Button>
                            <Button onClick={handleTryAgain}>Try another file</Button>
                        </ButtonGroup>
                    </> : loading ? <>
                        <Spinner size="lg" color="blue"/>
                    </> : null
                }
            </Box>
            {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
        </form>
    );
};