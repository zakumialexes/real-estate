import axios from "axios"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
    queryBuilder,
    queryBuilderWithOthers,
    queryBuilderPaginate,
    mutationPost,
    mutationPut,
    mutationPatch,
    mutationDelete,
} from "./api-helper"

export default axios.create({
    baseURL: "http://localhost:3500",
})
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    tagTypes: ["Property", "Agent", "Blog", "House", "Favourite", "Package", "SavedSearch", "Review", "Message"],
    endpoints: (builder) => ({
        getHome: queryBuilder(builder, "/home"),
        getAbout: queryBuilder(builder, "/about"),
        getTeam: queryBuilder(builder, "/team"),
        getAgentList: queryBuilder(builder, "/agent-list"),
        getItems: queryBuilder(builder, "/items"),
        getGallery: queryBuilder(builder, "/gallery"),
        getByParameters: queryBuilderWithOthers(builder),
        getByParametersMessages: queryBuilderWithOthers(builder, "Message"),
        getByParametersAgentList: queryBuilderWithOthers(builder, "Agent"),
        getByParametersBlogList: queryBuilderWithOthers(builder, "Blog"),
        getByParametersHouseList: queryBuilderWithOthers(builder, "House"),
        getByParametersFavouriteList: queryBuilderWithOthers(builder, "Favourite"),
        getByParametersPropertyList: queryBuilderWithOthers(builder, "Property"),
        getByParametersPackageList: queryBuilderWithOthers(builder, "Package"),
        getByParametersSavedSearchList: queryBuilderWithOthers(builder, "SavedSearch"),
        getByParametersReviewList: queryBuilderWithOthers(builder, "Review"),
        postReply: mutationPost(builder, "Review", "/reviewReplies"),
        addMessage: mutationPatch(builder, "Message", "/messages"),
        patchReview: mutationPatch(builder, "Review", "/reviews"),
        deleteProperty: mutationDelete(builder, "Property"),
        deleteFavourite: mutationDelete(builder, "Favourite"),
        deleteSavedSearch: mutationDelete(builder, "SavedSearch"),
        deleteReview: mutationDelete(builder, "Review"),
    }),
})
export const {
    useGetHomeQuery,
    useGetAboutQuery,
    useGetTeamQuery,
    useGetAgentListQuery,
    useGetItemsQuery,
    useGetGalleryQuery,
    useGetByParametersQuery,
    useGetByParametersMessagesQuery,
    useGetByParametersAgentListQuery,
    useGetByParametersBlogListQuery,
    useGetByParametersHouseListQuery,
    useGetByParametersFavouriteListQuery,
    useGetByParametersPropertyListQuery,
    useGetByParametersPackageListQuery,
    useGetByParametersSavedSearchListQuery,
    useGetByParametersReviewListQuery,
    usePatchReviewMutation,
    useDeletePropertyMutation,
    useDeleteFavouriteMutation,
    useDeleteSavedSearchMutation,
    useDeleteReviewMutation,
    usePostReplyMutation,
    useAddMessageMutation,
} = api
