<template>
    <div class="w-screen h-screen flex">
        <div class="w-48 px-4 py-4">
            <div class="flex items-center">
                <img class="w-6" alt="Vue logo" src="">
                <span class="ml-2 text-xl">Base project</span>
            </div>

            <ul class="mt-6">
                <li>
                    <router-link
                        :to="{ name: 'home' }"
                        v-slot="{ href, route, navigate, isActive, isExactActive }">
                        <button
                            @click="navigate"
                            class="block w-full text-left text-gray-600 hover:text-gray-900 capitalize"
                            :class="{ 'text-blue-500': isActive }">
                            {{ route.name }}
                        </button>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="flex-1 min-w-0 bg-gray-200">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppLayout'
    }
</script>