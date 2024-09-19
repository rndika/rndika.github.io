import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"


const page = async () =>{
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomendedAnime = reproduce(recomendedAnime, 4)


  return (
    <>
      <section>
        <Header title="paling populer" linkTitle="see all" linkHref="/populer"/>
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Rekomendasi"/>
        <AnimeList api={recomendedAnime}/>
      </section>
    </>
  )
}

export default page