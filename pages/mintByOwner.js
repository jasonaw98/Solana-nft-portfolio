import Head from 'next/head'

import { useState, useEffect } from "react";

function MintImage({ uri }) {
  const [image, setImage] = useState(null);
  const [desc, setdesc] = useState(null);
  const [error, setError] = useState(null);

  async function getImage(uri){
    try {
      const response = await fetch(uri);
      const data = await response.json();
      if (response.ok) {
        setImage(data.image);
        setdesc(data.description);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  useEffect(() => {
    getImage(uri);
  }, [uri]);

  return (
    <>
      {error && <p>There was an error: {error}</p>}
      {image && <img src={image} alt="nft" />}
      {desc && <p>{desc}</p>}
    </>
  );
}

export default function MintsByOwnerPage() {
  const [ownerAccount, setOwnerAccount] = useState("");
  const [mints, setMints] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://rest-api.hellomoon.io/v0/nft/mints-by-owner", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 6784f655-7555-42ba-bc22-9586a4ef31d2",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ownerAccount })
      });

      const data = await response.json();
      if (response.ok) {
        setMints(data.data);
      } else {
        setError(data.error);
      }
      
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Mints By Owner</h1>
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="ownerAccount">Owner Account:</label>
        <input type="text" id="ownerAccount" value={ownerAccount} onChange={(e) => setOwnerAccount(e.target.value)} />

        <button type="submit">Get Mints</button>
      </form>
      {mints && mints.length && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {mints.map((mint) => (
              <tr key={mint.id}>
                <td>{mint.metadataJson.name}</td>
                <td><MintImage uri={mint.metadataJson.uri} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
