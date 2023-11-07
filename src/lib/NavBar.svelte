<script lang="ts">
    import GridIcon from './icons/GridIcon.svelte';
    import ShoppingCartIcon from './icons/ShoppingCartIcon.svelte';
	import PeopleIcon from './icons/PeopleIcon.svelte';
	import VideoCameraIcon from './icons/VideoCameraIcon.svelte';
    import StatsIcon from './icons/StatsIcon.svelte';
    import BookIcon from './icons/BookIcon.svelte';
    import jq from 'jquery';
    import { page, navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

    onMount(() => jq(`[href="${$page.url.pathname}"]`).addClass('currentPage'));
    onNavigate(() => {
        jq('.currentPage').removeClass('currentPage');
        jq(`[href="${$navigating?.to?.url.pathname}"]`).addClass('currentPage');
    });
</script>

<nav class="block">
    <div class="navElement m-2 mb-5">
        <img class="h-6 mr-4" src="/svgs/gamedeck-logo.svg" alt="GameDeck Logo"/>
        <h1 class="text-lg">GameDeck</h1>
    </div>

    <ul>
        <li>
            <a href="/">
                <GridIcon />
                Home
            </a>
        </li>
        <li>
            <a href="/friends">
                <PeopleIcon />
                Friends
            </a>
        </li>
        <li>
            <a href="/recordings">
                <VideoCameraIcon />
                Recordings
            </a>
        </li>
        <li class="categoryName">VALORANT</li>
        <li>
            <a href="/valorant/store">
                <ShoppingCartIcon />
                Store
            </a>
        </li>
        <li>
            <a href="/valorant/stats">
                <StatsIcon />
                Stats
            </a>
        </li>
        <li>
            <a href="/valorant/matches">
                <StatsIcon />
                Matches
            </a>
        </li>
        <li>
            <a href="/valorant/lineups">
                <BookIcon />
                Lineups
            </a>
        </li>
        <li>
            <a href="/valorant/crosshairs">
                <BookIcon />
                Crosshairs
            </a>
        </li>
        <li>
            <a href="/valorant/wiki">
                <BookIcon />
                Wiki
            </a>
        </li>
        <li class="categoryName">Minecraft</li>
        <li>
            <a href="/minecraft/wiki">
                <BookIcon />
                Wiki
            </a>
        </li>
    </ul>

    <ul>
        <li>
            <a href="/settings">
                <BookIcon />
                Settings
            </a>
        </li>
    </ul>
    <!-- <div class="account w-full h-16 border rounded-2xl flex items-center">
        Profile not choosed
    </div> -->
</nav>

<style lang="scss">
    nav {
        min-width: 230px;
        max-width: 230px;
        padding: 14px;

        font-size: 12px;
        font-weight: 500;
    }

    a {
        @extend .navElement;
        gap: 16px;
        padding: 10px;
        padding-left: 16px;
        margin-bottom: 5px;

        border-radius: 10px;

        &:hover {
            background-color: var(--bg3);
            --fg: rgb(200, 200, 200);
            color: rgb(200, 200, 200);
        }
    }

    nav :global(.currentPage) {
        padding: 8px;
        padding-left: 14px;

        background-color: var(--bg3);
        color: var(--accent);
        :global() {
            --fg: var(--accent);
        }

        border: 2px solid var(--accent);

        font-weight: 600;
    }

    .categoryName {
        padding: 18px 12px 8px;

        color: var(--fg2);
        font-size: 12px;
    }

    .account {
        margin-top: auto;

        border: 1px solid var(--border);
    }

    .navElement {
        display: flex;
        align-items: center;
    }
</style>
