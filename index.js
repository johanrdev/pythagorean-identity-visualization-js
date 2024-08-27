import * as fn from "./functions.js";

const canvas = document.getElementById("canvas");
const overlay = document.getElementById("overlay");
const canvasCtx = canvas.getContext("2d");
const overlayCtx = overlay.getContext("2d");
[canvas.width, canvas.height] = [700, 700];
[overlay.width, overlay.height] = [700, 700];
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = (canvas.width / 4) - 5;
let angle = 0;

const frame = () => {
    canvasCtx.setTransform(1, 0, 0, 1, 0, 0);
    overlayCtx.setTransform(1, 0, 0, 1, 0, 0);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    overlayCtx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.cos(angle) > 0 && Math.sin(angle) > 0) {
        fn.drawFirstQuadrant(overlayCtx, angle, radius);
    }

    if (Math.cos(angle) < 0 && Math.sin(angle) > 0) {
        fn.drawSecondQuadrant(overlayCtx, angle, radius);
    }

    if (Math.cos(angle) < 0 && Math.sin(angle) < 0) {
        fn.drawThirdQuadrant(overlayCtx, angle, radius);
    }

    if (Math.cos(angle) > 0 && Math.sin(angle) < 0) {
        fn.drawFourthQuadrant(overlayCtx, angle, radius);
    }

    // Main arc
    canvasCtx.beginPath();
    canvasCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasCtx.stroke();
    canvasCtx.closePath();

    let x1, y1, x2, y2;

    // Radius
    x1 = centerX;
    y1 = centerY;
    x2 = centerX + Math.cos(angle) * radius;
    y2 = centerY + Math.sin(angle) * radius
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Cosine/Horizontal Leg
    x1 = centerX;
    y1 = centerY;
    x2 = centerX + Math.cos(angle) * radius;
    y2 = centerY;
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Sine/Vertical Leg
    x1 = centerX + Math.cos(angle) * radius;
    y1 = centerY;
    x2 = centerX + Math.cos(angle) * radius;
    y2 = centerY + Math.sin(angle) * radius;
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Positive Horizontal Axis
    x1 = centerX;
    y1 = centerY;
    x2 = centerX + radius;
    y2 = centerY;
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Positive Vertical Axis
    x1 = centerX;
    y1 = centerY;
    x2 = centerX;
    y2 = centerY + radius;
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Negative Horizontal Axis
    x1 = centerX;
    y1 = centerY;
    x2 = centerX - radius;
    y2 = centerY;
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Negative Vertical Axis
    x1 = centerX;
    y1 = centerY;
    x2 = centerX;
    y2 = centerY - radius;
    fn.drawLine(canvasCtx, x1, y1, x2, y2, 1);

    // Right Triangle
    let pointA = {
        x: centerX,
        y: centerY
    }

    let pointB = {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius
    }

    let pointC = {
        x: centerX + Math.cos(angle) * radius,
        y: centerY
    }

    fn.drawTriangle(canvasCtx, pointA, pointB, pointC);

    angle += 0.0125;

    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);