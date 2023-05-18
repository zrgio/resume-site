<script lang="ts">
	import FrostedCard from "$lib/FrostedCard/FrostedCard.svelte";
	import InfoCard from "$lib/InfoCard/InfoCard.svelte";
	export const prerender = true
</script>

<head>
	<title>Sergio Ulloa</title>
</head>

<body id="gradient" class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth scrollbar-hide overflow-hidden lg:w-full lg:flex lg:justify-center lg:space-x-7">
	<div id="home" class="flex place-content-center h-screen w-full lg:w-fit snap-start lg:place-content-end">
		<FrostedCard
			name={"Sergio Ulloa"}
			title={"Developer"}
			email={"sergioulloa@protonmail.com"}
			github={"zrgio"}
			linkedin={"zrgio"}
			resume={"https://raw.githubusercontent.com/zrgio/cv/main/sergio_ulloa_en.pdf"}
			picture={"https://avatars.githubusercontent.com/u/63694450"}
		/>
	</div>

	<div id="about" class="w-full h-screen flex self-center lg:w-fit lg:flex lg:self-center lg:items-center">
		<div class="snap-center gap-5 place-content-center w-full flex flex-col lg:w-fit lg:gap-0 lg:h-[512px] lg:place-content-between">
			<div class="flex order-1 justify-center lg:justify-start lg:w-max">
				<InfoCard
					title={"About Me"}
					text={"I am a software developer from Chile with a passion for solving problems and creating innovative solutions, with a desire to constantly learn and improve. In my spare time, I enjoy staying up-to-date with the latest industry trends and technologies, as well as working on personal projects to continue honing my skills."}
				/>
			</div>

			<div class="flex order-2 justify-center lg:justify-start">
				<InfoCard
					title={"Programming Languages"}
					text={"I am proficient in both Golang and Python, having used both for personal and professional projects. Currently, I am learning TypeScript and Svelte in order to expand my skillset."}
				/>
			</div>

			<div class="flex order-3 justify-center lg:justify-start">
				<InfoCard
					title={"Other Skills"}
					text={"I also have a strong foundation in other areas such as CAD and electronics design. Both of which when combined with software development, allow me to create anything I can think of."}
				/>
			</div>
		</div>
	</div>
</body>

<style>
	#gradient {
		background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		25% {
			background-position: 50% 25%;
		}
		50% {
			background-position: 100% 50%;
		}
		75% {
			background-position: 50% 25%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
