uniform float uTime;

void main() {
  vec3 pos = position;
  pos.y += (sin(uv.x * 50.0 + uTime) + cos(uv.x * 30.0 + uTime * 0.5)) * 10.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}