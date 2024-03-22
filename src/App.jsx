import axios from "axios";
import { useRef, useState } from "react";
import { youtube_parser } from "./utils";

function App() {
  const inptUrlRef = useRef();

  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const youtubeID = youtube_parser(inptUrlRef.current.value);
    console.log({ youtubeID });

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",

      headers: {
        //you key here
        //you key here
        
      },
      params: { id: youtubeID },
    };

    axios(options)
      .then((res) => {
        console.log(res);

        setUrlResult(res.data.link);
      })
      .catch((err) => console.log(err));

    inptUrlRef.current.value = "";
  };
  return (
    <>
      <span>youtube2mp3</span>
      <section>
        <h1>youtube2mp3converter</h1>
        <p className="desc">trakajha kdikjashdkajs</p>

        <form action="" onSubmit={handleSubmit}>
          <input ref={inptUrlRef} type="text" placeholder="place of hold" />
          <button type="submit"></button>
        </form>
        {urlResult ? (
          <a target="_blank" rel="noreffer" href={urlResult}>
            Download MP3
          </a>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default App;
