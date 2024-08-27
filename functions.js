export const drawSineSquare = (ctx, posX, posY, sizeY) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;

    ctx.moveTo(centerX, centerY);
    ctx.fillStyle = "red";
    ctx.fillRect(
        posX,
        posY,
        sizeY,
        sizeY
    );
}

export const drawCosineSquare = (ctx, posX, posY, sizeX) => {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "red";
    ctx.fillRect(
        posX,
        posY,
        sizeX,
        sizeX
    );
    ctx.stroke();
}

export const drawRadiusSquare = (ctx, angle, posX, posY, sizeX, sizeY) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(centerX, centerY);
    ctx.fillRect(
        posX, posY, sizeX, sizeY
    );
    ctx.restore();
}

export const drawFirstQuadrant = (ctx, angle, radius) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    let posX, posY, sizeX, sizeY;

    posX = centerX + Math.cos(angle) * radius;
    posY = centerX;
    sizeY = radius * Math.sin(angle);
    drawSineSquare(ctx, posX, posY, sizeY);

    sizeX = radius * Math.cos(angle);
    posX = centerX;
    posY = (centerY - sizeX) + Math.sin(angle);
    drawCosineSquare(ctx, posX, posY, sizeX);

    posX = 0;
    posY = 0;
    drawRadiusSquare(ctx, angle, posX, posY, radius, radius);
}

export const drawSecondQuadrant = (ctx, angle, radius) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    let posX, posY, sizeX, sizeY;

    sizeY = radius * Math.sin(angle);
    posX = (centerX - sizeY) + Math.cos(angle) * radius;
    posY = centerY;
    drawSineSquare(ctx, posX, posY, sizeY);

    posX = centerX;
    posY = centerY + Math.sin(angle);
    sizeX = radius * Math.cos(angle);
    drawCosineSquare(ctx, posX, posY, sizeX);

    drawRadiusSquare(ctx, angle, 0, 0, radius, -radius);
}

export const drawThirdQuadrant = (ctx, angle, radius) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    let posX, posY, sizeX, sizeY;

    sizeY = radius * Math.sin(angle);
    posX = centerX + Math.cos(angle) * radius;
    posY = (centerY - sizeY) + Math.sin(angle) * radius;
    drawSineSquare(ctx, posX, posY, sizeY);

    sizeX = radius * Math.cos(angle);
    posX = centerX;
    posY = (centerY - sizeX) - Math.sin(angle);
    drawCosineSquare(ctx, posX, posY, sizeX);

    drawRadiusSquare(ctx, angle, 0, 0, radius, radius);
}

export const drawFourthQuadrant = (ctx, angle, radius) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    let posX, posY, sizeX, sizeY;

    sizeY = radius * Math.sin(angle);
    posX = (centerX - sizeY) + Math.cos(angle) * radius;
    posY = (centerY - sizeY) + Math.sin(angle) * radius;
    drawSineSquare(ctx, posX, posY, sizeY);

    sizeX = radius * Math.cos(angle);
    posX = centerX;
    posY = centerY + Math.sin(angle);
    drawCosineSquare(ctx, posX, posY, sizeX);

    drawRadiusSquare(ctx, angle, 0, 0, radius, -radius);
}

export const drawLine = (ctx, x1, y1, x2, y2, size) => {
    ctx.beginPath();
    ctx.lineWidth = size;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

export const drawTriangle = (ctx, pointA, pointB, pointC, size) => {
    ctx.beginPath();
    ctx.lineWidth = size;
    ctx.fillStyle = "orange";
    ctx.moveTo(pointA.x, pointA.y);
    ctx.lineTo(pointB.x, pointB.y);
    ctx.lineTo(pointC.x, pointC.y);
    ctx.lineTo(pointA.x, pointA.y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}