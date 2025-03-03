"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface ParticlesProps {
	className?: string;
	quantity?: number;
	staticity?: number;
	ease?: number;
	size?: number;
	refresh?: boolean;
	color?: string;
	vx?: number;
	vy?: number;
}

function hexToRgb(hex: string): number[] {
	hex = hex.replace("#", "");

	if (hex.length === 3) {
		hex = hex
			.split("")
			.map(char => char + char)
			.join("");
	}

	const hexInt = parseInt(hex, 16);
	const red = (hexInt >> 16) & 255;
	const green = (hexInt >> 8) & 255;
	const blue = hexInt & 255;
	return [red, green, blue];
}

type Circle = {
	x: number;
	y: number;
	translateX: number;
	translateY: number;
	size: number;
	alpha: number;
	targetAlpha: number;
	dx: number;
	dy: number;
	magnetism: number;
};

function remapValue(
	value: number,
	start1: number,
	end1: number,
	start2: number,
	end2: number,
): number {
	return ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
}

function drawParticlesOnCanvas(
	canvas: HTMLCanvasElement,
	quantity: number,
	staticity: number,
	ease: number,
	size: number,
	color: string,
	vx: number,
	vy: number,
) {
	const context = canvas.getContext("2d");
	if (!context) return;

	const dpr = window.devicePixelRatio || 1;
	const rgb = hexToRgb(color);
	const circles: Circle[] = [];
	const canvasSize = { w: canvas.offsetWidth, h: canvas.offsetHeight };

	canvas.width = canvasSize.w * dpr;
	canvas.height = canvasSize.h * dpr;
	canvas.style.width = `${canvasSize.w}px`;
	canvas.style.height = `${canvasSize.h}px`;
	context.scale(dpr, dpr);

	const circleParams = (): Circle => {
		const x = Math.floor(Math.random() * canvasSize.w);
		const y = Math.floor(Math.random() * canvasSize.h);
		const translateX = 0;
		const translateY = 0;
		const pSize = Math.floor(Math.random() * 2) + size;
		const alpha = 0;
		const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
		const dx = (Math.random() - 0.5) * 0.1;
		const dy = (Math.random() - 0.5) * 0.1;
		const magnetism = 0.1 + Math.random() * 4;
		return {
			x,
			y,
			translateX,
			translateY,
			size: pSize,
			alpha,
			targetAlpha,
			dx,
			dy,
			magnetism,
		};
	};

	const drawCircle = (circle: Circle, update = false) => {
		const { x, y, translateX, translateY, size, alpha } = circle;
		context.translate(translateX, translateY);
		context.beginPath();
		context.arc(x, y, size, 0, 2 * Math.PI);
		context.fillStyle = `rgba(${rgb.join(",")}, ${alpha})`;
		context.fill();
		context.setTransform(dpr, 0, 0, dpr, 0, 0);

		if (!update) {
			circles.push(circle);
		}
	};

	const clearContext = () => {
		context.clearRect(0, 0, canvasSize.w, canvasSize.h);
	};

	const animate = () => {
		clearContext();
		circles.forEach((circle, i) => {
			const edge = [
				circle.x + circle.translateX - circle.size,
				canvasSize.w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				canvasSize.h - circle.y - circle.translateY - circle.size,
			];
			const closestEdge = edge.reduce((a, b) => Math.min(a, b));
			const remapClosestEdge = parseFloat(
				remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
			);
			if (remapClosestEdge > 1) {
				circle.alpha += 0.02;
				if (circle.alpha > circle.targetAlpha) {
					circle.alpha = circle.targetAlpha;
				}
			} else {
				circle.alpha = circle.targetAlpha * remapClosestEdge;
			}
			circle.x += circle.dx + vx;
			circle.y += circle.dy + vy;
			circle.translateX +=
				(0 / (staticity / circle.magnetism) - circle.translateX) / ease;
			circle.translateY +=
				(0 / (staticity / circle.magnetism) - circle.translateY) / ease;

			drawCircle(circle, true);

			if (
				circle.x < -circle.size ||
				circle.x > canvasSize.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.h + circle.size
			) {
				circles.splice(i, 1);
				const newCircle = circleParams();
				drawCircle(newCircle);
			}
		});
		requestAnimationFrame(animate);
	};

	for (let i = 0; i < quantity; i++) {
		const circle = circleParams();
		drawCircle(circle);
	}

	animate();
}

const Particles: React.FC<ParticlesProps> = ({
	className = "",
	quantity = 100,
	staticity = 50,
	ease = 50,
	size = 0.4,
	refresh = false,
	color = "#ffffff",
	vx = 0,
	vy = 0,
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			drawParticlesOnCanvas(
				canvasRef.current,
				quantity,
				staticity,
				ease,
				size,
				color,
				vx,
				vy,
			);
		}
	}, [quantity, staticity, ease, size, color, vx, vy, refresh]);

	return (
		<div
			className={cn("pointer-events-none", className)}
			aria-hidden="true"
		>
			<canvas ref={canvasRef} className="size-full" />
		</div>
	);
};

export default Particles;
