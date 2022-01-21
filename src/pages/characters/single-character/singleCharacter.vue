<template>
    <div class="w-full h-full">
        <div class="w-full h-64 bg-header-image" />

        <TitleSection>
            <template #title>
                <router-link
                    :to="{ name: 'characters'}"
                    tag="a"
                    class="flex items-center justify-center mt-8"
                >
                        <IconArrowLeft class="w-4 h-4 text-gray-500" />
                        <span class="text-sm text-gray-500">Back to Home</span>
                </router-link>
            </template>
        </TitleSection>

        <ContentSection>
            <Find
                :immediate="true"
                model="GetSingleCharacter"
                :config="{ characterId: id }"
                :primaryKey="id"
                v-slot="{ data: character, loading, pages }"
            >
                <div v-if="character" class="w-full h-full p-8 flex flex-wrap items-start justify-center">
                    <div class="w-full xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 flex items-start justify-center xl:justify-end lg:justify-end md:justify-end">
                        <img
                            class="w-42 h-full max-h-65 object-center object-cover group-hover:opacity-75"
                            :src="character.image"
                            :alt="character.name"
                        />
                    </div>
                    <div class="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 max-w-xs h-65 p-4 bg-gray-700 rounded-bl-lg rounded-br-lg xl:rounded-bl-none lg:rounded-bl-none md:rounded-bl-none sm:rounded-bl-none xl:rounded-tr-lg lg:rounded-tr-lg md:rounded-tr-lg sm:rounded-tr-lg xl:rounded-br-lg lg:rounded-br-lg md:rounded-br-lg sm:rounded-br-lg">
                        <h3 class="text-3xl text-white">
                            {{ character.name }}
                        </h3>
                        <p v-if="character.species !== 'unknown'" class="mt-1 text-lg font-medium text-white">
                            {{ character.species  }}
                        </p>
                        <div v-if="character.status !== 'unknown'" class="flex items-center justify-start">
                            <div class="w-2 h-2 rounded-full mt-1 mr-1" :class="statusColor(character.status)">&nbsp; &nbsp;</div>
                            <p class="mt-1 text-md font-medium text-white">{{ character.status}}</p>
                        </div>
                        <p v-if="character.gender !== 'unknown'" class="mt-8 pt-6 text-md font-medium text-white border-t">
                            <span class="text-gray-500">Gender:</span>
                            {{ character.gender }}
                        </p>
                        <p v-if="character.origin.name !== 'unknown'" class="mt-1 text-md font-medium text-white">
                            <span class="text-gray-500">Comes from:</span>
                            {{ character.origin.name }}
                        </p>
                        <p v-if="character.location.name !== 'unknown'" class="mt-1 text-md font-medium text-white">
                            <span class="text-gray-500">Lives in:</span>
                            {{ character.location.name }}
                        </p>
                    </div>
                </div>
            </Find>
        </ContentSection>

        <FooterSection customClass="bg-gray-700">
            <div class="flex items-center justify-between px-4 xl:px-40 lg:px-40 md:px-40 sm:px-24 py-12">
                <router-link
                    :to="{ name: 'characters'}"
                    tag="a"
                >
                    <span class="text-sm text-gray-500">Home</span>
                </router-link>
                <a href="resources/about_project.pdf" target="_blank" class="text-gray-500">About Project</a>
                <a href="resources/CV_SilviaVenegas_En.pdf" target="_blank" class="text-gray-500">About Me</a>
            </div>
            <p class="text-gray-500 text-center">
                Created with
                <span class="text-purple-300">love</span>
                by Silvia Venegas
            </p>
        </FooterSection>
    </div>
</template>

<script>
    import TitleSection from "@/components/title-section/TitleSection";
    import ContentSection from "@/components/content-section/ContentSection";
    import FooterSection from "@/components/footer-section/FooterSection";
    import { IconArrowLeft } from '@/components/icons';

    import { Find } from '@/api/components';

    export default {
        name: 'singleCharacter',
        components: { TitleSection, ContentSection, FooterSection, Find, IconArrowLeft },
        data() {
            return {
                page: 1,
            };
        },
        computed: {
            id() {
                return this.$route.params.id;
            },
        },
        methods: {
            statusColor(status){
                return status === "Alive" ? "bg-green-500" : "bg-red-500";
            }
        }
    }
</script>
