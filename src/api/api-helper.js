export const queryBuilder = (builder, route) => builder.query({ query: () => route })

export const queryBuilderWithOthers = (builder, tag) =>
    builder.query({ query: (route) => route, providesTags: tag ? [tag] : [] })

export const queryBuilderPaginate = (builder) =>
    builder.query({
        query: ({ page, limit, route, query }) => `${route}?_page=${page}&_limit=${limit}${query ? `&q=${query}` : ""}`,
    })

export const mutationPost = (builder, tag, route) =>
    builder.mutation({ query: (body) => ({ url: route, method: "POST", body: body }), invalidatesTags: [tag] })

export const mutationPatch = (builder, tag, route) =>
    builder.mutation({
        query: (body) => ({ url: `${route}/${body.id}`, method: "PATCH", body: body }),
        invalidatesTags: [tag],
    })

export const mutationPut = (builder, tag, route) =>
    builder.mutation({
        query: (body) => ({ url: `${route}/${body.id}`, method: "PUT", body: body }),
        invalidatesTags: [tag],
    })

export const mutationDelete = (builder, tag) =>
    builder.mutation({ query: (route) => ({ url: route, method: "DELETE" }), invalidatesTags: [tag] })
