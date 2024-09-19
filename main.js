const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
const start = async () => {
	const video = document.createElement("video");
	video.setAttribute("src", "./myVideo.mp4");
	video.setAttribute("loop", "");

	video.oncanplay = () => {
		anchor.onTargetFound = () => {
			video.play();
		}

		anchor.onTargetLost = () => {
			video.pause();
		}
				
	}
	const mindarThree = new window.MINDAR.IMAGE.MindARThree({
	container: document.body, 
	imageTargetSrc: './meijiroo.mind'
});

const {renderer, scene, camera} = mindarThree;

const geometry = new THREE.PlaneGeometry(1, 1);
const videoTexture = new THREE.VideoTexture(video);
const material = new THREE.MeshBasicMaterial({map: videoTexture, side: THREE.FrontSide, toneMapped: false});
const plane = new THREE.Mesh(geometry, material);

const anchor = mindarThree.addAnchor(0);
anchor.group.add(plane);

await mindarThree.start();


renderer.setAnimationLoop( () => {
	renderer.render(scene, camera);
});

}

start();

});

