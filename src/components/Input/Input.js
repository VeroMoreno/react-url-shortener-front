import React, { useState } from "react";
import validator from 'validator';
import Button from '../Button/Button'
import { FormWrapper, StyledInput, BoxWrapper } from './input.style';

const Input = () => {
  const [urlShort, setUrlShort] = useState();
  const [showBox, setShowBox] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validUrl = validator.isURL(event.target.urlInput.value, {
      require_protocol: true
    });
    if (!validUrl) {
      alert('Please enter a valid url with http(s) protocol.');
    } else {
      const urlOriginal = event.target.elements.urlInput.value;
      const response = await fetch(`https://react-url-shortener-back.herokuapp.com/`, {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify( {urlOriginal} )
      });
      const data = await response.json();
      console.log("data", data.urlShort);
      setShowBox(true)
      setUrlShort(data.urlShort);
    }
  }

  const Box = (urlShort) => {
    const [copied, setCopied] = useState(false);
    const { url } = urlShort;
    if (urlShort) {
      return (
        <BoxWrapper>
          Here is your shortened url:
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://react-url-shortener-back.herokuapp.com/${url}`}> {`4youTechie/${url}`}
          </a>
          <Button
            text={copied ? 'Copied!' : 'Copy'}
            onClick={() => {
              navigator.clipboard.writeText(`https://react-url-shortener-back.herokuapp.com/${url}`)
              .then(() => {
                setCopied(true);
              })
            }}
          />
          {/*error message*/}
        </BoxWrapper>
      )
    }
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          id="urlInput"
          placeholder="Put your url here"
        />
        <Button
          text="Shortify"
          type="submit"
        />
      </FormWrapper>
      {showBox && <Box url={urlShort}/>}
    </>
  );
}

export default Input;