import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"

const page = async ({ params }) => {
  const { keyword } = params
  
  const decodedKeyword = decodeURI (keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
    <section>
    <Header title= {`pencarian untuk ${decodedKeyword}...`}/>
    <AnimeList api={searchAnime}/>
    </section>
    </>
  )
}

export default page