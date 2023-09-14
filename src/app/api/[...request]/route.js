import { NextResponse } from "next/server";
const { API_KEY } = process.env;

const getServerSideProps = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key="+API_KEY);
    const data = await response.json();

    return data;
}

export const GET = async () => {
    const result = await getServerSideProps();
    if(result){
        return NextResponse.json({ result, success: true });
    } else{
        return NextResponse.json({ result: "Something went wrong, Try again!", success: false });
    }
}