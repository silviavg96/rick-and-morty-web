<template>
    <Paginate
        ref="paginateCharacters"
        :immediate="true"
        model="GetAllCharacters"
        :query="queryParams"
        v-slot="{ data: characters, loading, pages, request }"
    >
        <div class="w-full h-full">
            <div class="w-full h-64 flex items-center justify-center bg-header-image bg-cover">
                <RenderlessSearch
                    v-model="search"
                    :await-search="true"
                    renderless-class="min-w-32"
                    @input="request"
                />
            </div>

            <TitleSection customClass="text-center mt-6">
                <template #title>
                    Rick & Morty Characters
                </template>
            </TitleSection>

            <ContentSection>
                <div v-if="characters" class="w-full h-full p-8 flex flex-wrap items-start justify-center">
                    <div
                        v-for="(character, index) in characters" :key="index"
                        class="relative xl:w-1/5 lg:w-1/4 md:w-1/4 sm:w-1/2 mx-2 mb-4 bg-gray-200 rounded-lg overflow-hidden"
                    >
                        <router-link
                            :to="{ name: 'character', params: { id: character.id } }"
                            tag="a"
                        >
                            <img
                                class="w-full h-full object-center object-cover group-hover:opacity-75"
                                :src="character.image"
                                :alt="character.name"
                            />
                            <div v-if="character.status !== 'unknown'" class="absolute top-0 right-0 px-2 pb-1 mr-1 mt-1 rounded-lg bg-gray-700 opacity-75">
                                <div class="flex items-center justify-start">
                                    <div class="w-2 h-2 rounded-full mt-1 mr-1" :class="statusColor(character.status)">&nbsp; &nbsp;</div>
                                    <p class="mt-1 text-xs font-medium text-white">{{ character.status}}</p>
                                </div>
                            </div>
                            <div class="w-full p-4 b-rounded-lg bg-gray-700">
                            <h3 class="text-lg text-white">
                                {{ character.name }}
                            </h3>
                            <div class="flex items-center">

                                <span v-if="character.species !== 'unknown'" class="mt-1 text-xs font-medium text-white">
                                    {{ character.species  }}
                                </span>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
            </ContentSection>

            <FooterSection customClass="bg-gray-700">
                <div class="flex items-center justify-between px-4 xl:px-40 lg:px-40 md:px-40 sm:px-24 py-12">
                    <router-link
                        :to="{ name: 'characters'}"
                        tag="a"
                    >
                        <span class="text-sm text-gray-500">Home</span>
                    </router-link>
                    <a href="resources/Documentation_Rick&Morty_Web.pdf" target="_blank" class="text-gray-500">About Project</a>
                    <a href="resources/CV_SilviaVenegas_En.pdf" target="_blank" class="text-gray-500">About Me</a>
                </div>
                <p class="text-gray-500 text-center">
                    Created with
                    <span class="text-purple-300">love</span>
                    by Silvia Venegas
                </p>
            </FooterSection>
        </div>
    </Paginate>
</template>

<script>

    import TitleSection from "@/components/title-section/TitleSection";
    import ContentSection from "@/components/content-section/ContentSection";
    import FooterSection from "@/components/footer-section/FooterSection";
    import RenderlessSearch from '@/components/renderless-search/RenderlessSearch';

    import { Paginate } from '@/api/components';

    export default {
        name: 'Characters',
        components: { TitleSection, ContentSection, FooterSection, RenderlessSearch, Paginate },
        data() {
            return {
                page: 1,
                search: '',
                characters: []
            };
        },
        computed: {
            queryParams() {
                console.log({ name: this.search })
                return  { name: this.search };
            },
        },
        methods: {
            statusColor(status){
                return status === "Alive" ? "bg-green-500" : "bg-red-500";
            },
        }
    }
</script>
