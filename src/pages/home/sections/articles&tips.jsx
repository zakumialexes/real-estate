import Wrapper from "./wrapper"
import { useEffect, useState } from "react"
import { Box, Card, CardContent, CardMedia, Stack, Avatar, Divider, Typography } from "@mui/material"
import style from "./articles&tips.module.scss"
import api from "../../../api/api"
const ArticleCard = ({ image, avatar, author, date, title, type }) => {
    return (
        <Card className={style.wrapper}>
            <Box className={style.imageWrapper}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="image"
                    sx={{ zIndex: 0, objectFit: "cover", width: "100%", minHeight: "254px" }}
                />
            </Box>
            <CardContent>
                <Typography variant="subtitle2" sx={{ color: "#ff5a5f", marginBottom: "5px", lineHeight: "1.5rem" }}>
                    {type}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#484848", marginBottom: "5px", lineHeight: "1.5rem" }}
                >
                    {title}
                </Typography>
            </CardContent>
            <Box sx={{ minHeight: "80px" }}>
                <Divider />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ padding: "20px", color: "#777777" }}
                >
                    <Stack direction="row" alignItems="center" gap={1}>
                        <Avatar alt="photo" src={avatar} />
                        <Typography>{author}</Typography>
                    </Stack>
                    <Typography>{date}</Typography>
                </Stack>
            </Box>
        </Card>
    )
}
const ArticleTips = () => {
    const title = "Articles & Tips"
    const content = "Lorem jgi sdaij aijdfa gaioa"
    const [articles, setArticles] = useState()
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await api.get("/articles-tips")
                setArticles(response.data)
            } catch (err) {}
        }
        fetchArticles()
    }, [])

    return (
        <Wrapper color={"#f7f7f7"} title={title} content={content}>
            <Stack
                direction={{ sm: "row", xs: "column" }}
                justifyContent="center"
                alignItems="stretch"
                gap={4}
                flexWrap="wrap"
                sx={{ width: "fit-content" }}
            >
                {articles?.map((article, index) => (
                    <ArticleCard
                        key={index}
                        image={article.image}
                        avatar={article.authorImg}
                        author={article.author}
                        date={article.date}
                        title={article.title}
                        type={article.topic}
                    />
                ))}
            </Stack>
        </Wrapper>
    )
}

export default ArticleTips
