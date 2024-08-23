uniform float uPointSize;
uniform sampler2D uTexture;
uniform float uColumns;
uniform float uLiners;

varying vec2 vTexCoords;

void main(){
	vec3 newPos = position;

		//	(0-230) / (230) = -0.5～0.5
	float texOffsetU = position.x / uColumns+0.5;
	//	(0-180) / (180) = -0.5～0.5
	float texOffsetV = position.y / uLiners+0.5;

	vec2 uv = vec2(texOffsetU,texOffsetV);

	vec4 tex = texture2D(uTexture,uv);
	newPos.z=tex.x*10.0;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos,1.0);
	gl_PointSize = uPointSize;

	vTexCoords = position.xy;
}