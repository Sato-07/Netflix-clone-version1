import Head from 'next/head'
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Banner from "../components/Banner";
import Header from "../components/Header";
import Modal from '../components/Modal';
import Row from '../components/Row';
import useAuth from '../hooks/useAuth';
import { Movie } from '../typing';
import requests from "../utils/request";

interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
  }
  



const Home = ({netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,

}:Props) => {
    const { loading } =useAuth()
    const showModal = useRecoilValue(modalState)
    if (loading) {
        return 'loading'
    }


    return (
        <div className="relative h-screen bg-gradient-to-b from-gray-900/15 to-[#010511] lg:h-[140vh]"> 
            <Head>
                <title> Netflix </title>
            </Head>

            <Header/>
            <main className='relative pl-4 pb-3 md:space-x-10 lg:space-x-2 lg:space-y-24 lg:pl-16' >
                <Banner netflixOriginals={netflixOriginals}/>
                <section className='md:pb-14 md:space-y-24' >
                    <Row title=" Trending Now" movies={trendingNow}/>
                    <Row title="Top rated " movies={topRated}/>
                    <Row title="Action Thrillers" movies={actionMovies} />
                    {/* My List */}
                    <Row title="Comedies" movies={comedyMovies} />
                    <Row title="Scary Movies" movies={horrorMovies} />
                    <Row title="Romance Movies" movies={romanceMovies} />
                    <Row title="Documentaries" movies={documentaries} />
                </section>

            </main>
            {showModal && <Modal/>}
        </div>
    )
}

export default Home

export const getServerSideProps = async () => {

    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
      ] = await Promise.all([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
      ])
      return {
        props: {
          netflixOriginals: netflixOriginals.results,
          trendingNow: trendingNow.results,
          topRated: topRated.results,
          actionMovies: actionMovies.results,
          comedyMovies: comedyMovies.results,
          horrorMovies: horrorMovies.results,
          romanceMovies: romanceMovies.results,
          documentaries: documentaries.results,
        },
    }


}