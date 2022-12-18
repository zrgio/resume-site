<script lang="ts">
    export let name = "John Doe";
    export let title = "Developer";
    export let email = "JohnDoe@example.com";
    export let github = "JohnDoe";
    export let linkedin = "JohnDoe";
    export let resume = "https://example.com";
    export let picture = "https://thiscatdoesnotexist.com";
</script>

<div
    id="FrostedCard"
    class="
    bg-white
    bg-opacity-40
    backdrop-blur-md
    rounded-drop-shadow-lg
    self-center
    rounded-3xl
    flex
    flex-col
    items-center
    h-3/4
    max-h-128
    lg:h-3/4
    w-11/12
    max-w-xs"
    >

    <div class="pt-10"/>

    <img class="rounded-full w-20 lg:w-32 h-20 lg:h-32 order-1" src={picture} alt={name}/>

    <p class="text-3xl order-2 pt-4 font-raleway font-extrabold">{name}</p>
    <p class="text-2xl order-3 font-raleway font-bold">{title}</p>

    <div id="links-icons" class="flex flex-col order-4 pt-2.5">

        <div class="py-2">
            <a aria-label="Email" href="mailto:{email}" class="bg-black bg-opacity-10 px-2.5 rounded-xl flex py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                    />
                </svg>

                <div class="pl-5 self-center">
                    <p class="font-raleway font-semibold">{email}</p>
                </div>
            </a>
        </div>

        <div class="py-2">
            <a aria-label="GitHub" href="https://github.com/{github}" target="_blank" rel="noopener noreferrer" class="bg-black bg-opacity-10 px-2.5 rounded-xl flex py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" class="w-6 h-6">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                    />
                </svg>

                <div class="pl-5 self-center">
                    <p class="font-raleway font-semibold">@{github}</p>
                </div>
            </a>
        </div>

        <div class="py-2">
            <a aria-label="LinkedIn" href="https://linkedin.com/in/{linkedin}" target="_blank" rel="noopener noreferrer" class="bg-black bg-opacity-10 px-2.5 rounded-xl flex py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                </svg>    

                <div class="pl-5 self-center">
                    <p class="font-raleway font-semibold">@{linkedin}</p>
                </div>
            </a>
        </div>

        <div class="py-2">
            <a aria-label="Resume" href={resume} target="_blank" rel="noopener noreferrer" class="bg-black bg-opacity-10 px-2.5 rounded-xl flex py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-6 h-6">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z"
                    />
                </svg>

                <div class="pl-5 self-center">
                    <p class="font-raleway font-semibold">Resume</p>
                </div>
            </a>
        </div>

    </div>
</div>