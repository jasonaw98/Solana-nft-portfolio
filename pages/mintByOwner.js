import { useState, useEffect } from "react";

function MintImage({ uri }) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  async function getImage(uri){
    try {
      const response = await fetch(uri);
      const data = await response.json();
      if (response.ok) {
        setImage(data.image);
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
    </>
  );
}

export default function MintsByOwnerPage() {
  const [ownerAccount, setOwnerAccount] = useState("");
  const [mints, setMints] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const syntheticEvent = {
      preventDefault: () => {}
    };
  
    const initialOwnerAccount = "629kW7T6tidG8hcvhd5KYfT4QTnR847MkFMXghSgqeG2";
    setOwnerAccount(initialOwnerAccount);
    handleSubmit(syntheticEvent);
  }, []);
  

  return (
    <div>
      <div style={{
        backgroundImage: 'url("1.jpg")',
        // backgroundImage: 'linear-gradient(to right, #ACB6E5, #74ebd5)',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
          zIndex: -1,
        position: "fixed",
      }}></div>
      <h1>View Your Solana NFT Collections 🚀</h1>
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="ownerAccount">Enter address:</label>
        <input type="text" id="ownerAccount" value={ownerAccount} onChange={(e) => setOwnerAccount(e.target.value)} />

        <button className='submit-button' type="submit">Get Mints</button>
      </form>

      {loading ? (
        <p className="fetchMint">Fetching Mints....😎</p>
      ) : (
      mints && mints.length ? (
          <div className='container mx-auto px-3'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            {mints.map((mint) => (
              <tr className='nft' key={mint.id}>
                <td className='text-3xl md:text-2xl font-bold text-slate-700 mb-5 text-center' >{mint.metadataJson.name}</td>
                {/* <td className='nftname' >{mint.metadataJson.name}</td> */}
                <td className='nftimg '><MintImage uri={mint.metadataJson.uri} /></td>
              </tr>
            ))}
            </div>
          </div>
      ) : (
        <p className="fetchMint">No Mints Found 😅</p>
      )
      )}
    </div>
  );
}
