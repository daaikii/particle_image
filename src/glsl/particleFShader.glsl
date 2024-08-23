precision highp float;

uniform sampler2D uTexture;
uniform float uColumns;
uniform float uLiners;

varying vec2 vTexCoords;



void main() {
	vec2 uv = gl_PointCoord;
	float distanceToCenter = distance(uv,vec2(.5));
	if(distanceToCenter>0.5)discard;

	uv.y *= -1.0;
	uv 	 /= vec2(uColumns,uLiners);
	// (0-1,0-1) / (230,180)

	//	(0-230) / (230) = -0.5～0.5
	float texOffsetU = vTexCoords.x / uColumns;
	//	(0-180) / (180) = -0.5～0.5
	float texOffsetV = vTexCoords.y / uLiners;

	
	uv += vec2(texOffsetU,texOffsetV);
	uv += vec2(0.5);

	vec4 texture = texture2D(uTexture,uv);

	gl_FragColor =  texture;
}

