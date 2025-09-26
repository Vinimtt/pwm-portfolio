"use client";
import React from 'react';

const HEAD = (
  <circle key="head" cx="250" cy="90" r="40" stroke="white" strokeWidth="8" fill="none" />
);

const BODY = (
  <line key="body" x1="250" y1="130" x2="250" y2="250" stroke="white" strokeWidth="8" />
);

const RIGHT_ARM = (
  <line key="right-arm" x1="250" y1="160" x2="320" y2="130" stroke="white" strokeWidth="8" />
);

const LEFT_ARM = (
  <line key="left-arm" x1="250" y1="160" x2="180" y2="130" stroke="white" strokeWidth="8" />
);

const RIGHT_LEG = (
  <line key="right-leg" x1="250" y1="250" x2="310" y2="310" stroke="white" strokeWidth="8" />
);

const LEFT_LEG = (
  <line key="left-leg" x1="250" y1="250" x2="190" y2="310" stroke="white" strokeWidth="8" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];


export function Boneco({ numeroDeErros }) {
  return (
    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
      <svg viewBox="0 0 350 400">
        {BODY_PARTS.slice(0, numeroDeErros)}
        <line x1="250" y1="50" x2="250" y2="50" stroke="white" strokeWidth="10" />
        <line x1="100" y1="50" x2="250" y2="50" stroke="white" strokeWidth="10" />
        <line x1="100" y1="400" x2="100" y2="50" stroke="white" strokeWidth="10" />
        <line x1="20" y1="400" x2="300" y2="400" stroke="white" strokeWidth="10" />
      </svg>
    </div>
  );
}