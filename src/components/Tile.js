import React from "react";

function Tile({img, caption, titletile, paragraph1, paragraph2, texttile3: paragraph3}) {


    return (
        <section>
            {img && <img src={img} alt={caption}/>}
            {titletile && <h2>{titletile}</h2>}
            {paragraph1 && <p>{paragraph1}</p>}
            {paragraph2 && <p>{paragraph2}</p>}
            {paragraph3 && <p>{paragraph3}</p>}
        </section>
    );
}

export default Tile;