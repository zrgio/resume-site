<script lang="ts">
    export let title = "Lorem Ipsum"
    export let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
</script>

<div
    id="InfoCard"
    class="
    bg-white
    bg-opacity-40
    backdrop-blur-shadow-lg
    rounded-3xl
    w-11/12
    max-w-md
    lg:w-[470px]
    self-center
    "
    >
    
    <div class="flex place-content-center pt-2">
        <p class="font-raleway font-extrabold">{title}</p>
    </div>
    
    <div class="px-4 pb-2 text-md text-center">
        <p class="font-raleway font-medium">{text}</p>
    </div>
</div>