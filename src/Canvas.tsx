// @ts-nocheck
import { onMount } from "solid-js";
import WebGLShaderRenderer from "./webgl";

const _root = {
    numDots: 1,
    maximum: 1,
    minimum: 0,
    radiusScale: 5,
};

const Canvas = () => {
    // let canvas;

    onMount(async () => {
        const canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        _root.screenSize = [canvas.width, canvas.height];

        _root.dots = Array(_root.numDots)
            .fill()
            .map(() => randomDot());

        // restart();
        let renderer = new WebGLShaderRenderer("canvas", _root.screenSize);
        renderer.programInfo.uniforms = [
            "screenSize",
            "dots",
            "colors",
            "numDots",
            "radii",
            "power",
            "backgroundColor",
            "maximum",
            "minimum",
        ];
        await renderer.setShader("./vertex.glsl", "./fragment.glsl");

        window.onmousemove = (e) => {
            _root.dots[0].pos = [e.clientX, canvas.height - e.clientY];
        };

        // let fps = document.getElementById("fps");
        renderer.callback = (gl, shaderProgram) => {
            // _root.dots.forEach((dot) => {
            //     dot.color.forEach((c, i) => {
            //         dot.color[i] = Math.max(0, Math.min(1, c + dot.dc[i]));
            //     });

            //     dot.pos.forEach((p, i) => {
            //         if (
            //             p + dot.v[i] - dot.radius - _root.maximum < 0 ||
            //             p + dot.v[i] + dot.radius + _root.maximum >
            //                 _root.screenSize[i]
            //         )
            //             dot.v[i] = -dot.v[i];
            //         dot.pos[i] = p + dot.v[i];
            //     });
            // });

            gl.uniform2fv(shaderProgram.uniforms.screenSize, _root.screenSize);
            gl.uniform2fv(
                shaderProgram.uniforms.dots,
                _root.dots.flatMap((dot) => dot.pos)
            );
            gl.uniform4fv(
                shaderProgram.uniforms.colors,
                _root.dots.flatMap((dot) => dot.color)
            );
            gl.uniform1f(shaderProgram.uniforms.screenSize, _root.numDots);
            gl.uniform1fv(
                shaderProgram.uniforms.radii,
                _root.dots.flatMap((dot) => dot.radius * _root.radiusScale)
            );
            gl.uniform1f(shaderProgram.uniforms.power, 5);
            gl.uniform4f(shaderProgram.uniforms.backgroundColor, 0, 0, 0, 1);
            gl.uniform1f(shaderProgram.uniforms.maximum, _root.maximum);
            gl.uniform1f(shaderProgram.uniforms.minimum, _root.minimum);
            // fps.innerHTML = `dt: ${Math.round(renderer.dt)}ms fps: ${Math.round(
            //     1000 / renderer.dt
            // )}`;
        };
        renderer.start();
    });

    return (
        <canvas
            style={{
                display: "block",
                width: "100%",
                "background-color": "black",
                opacity: "0.3",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                "z-index": "-1",
            }}
        />
    );
};

export default Canvas;

const randomColor = () => {
    // return multVec(256, hsv2rgb(Math.random() * 360, 1, 1));
    return Array(3)
        .fill()
        .map(() => Math.random());
};

const randomDot = () => {
    const radius = Math.random() * 10 + 10;
    return {
        color: [...randomColor(), 1],
        pos: addVec(
            elemMultVec(
                addVec(_root.screenSize, [
                    -2 * _root.maximum - 2 * radius,
                    -2 * _root.maximum - 2 * radius,
                ]),
                randVec(2)
            ),
            [_root.maximum + radius, _root.maximum + radius]
        ),
        v: randVec(2).map((x) => (2 * x - 1) * 3),
        dc: [0, 0, 0, 0],
        radius,
    };
};

/****
 * MATH
 */

/**
 *
 * COMPLEX
 */

const elemMultVec = (a, ...rest) => {
    if (rest.length === 0) return a;
    const restSum = elemMultVec(...rest);
    return a.map((x, i) => x * restSum[i]);
};
const addVec = (a, ...rest) => {
    if (rest.length === 0) return a;
    const restSum = addVec(...rest);
    return a.map((x, i) => x + restSum[i]);
};

const randVec = (length) =>
    Array(length)
        .fill()
        .map(() => Math.random());
