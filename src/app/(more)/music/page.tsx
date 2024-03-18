'use client';
import React, { useState } from 'react';

// Define a type for the song information
type Song = {
  title: string;
  artist: string;
}

export default function MusicPage() {
  // State to hold the list of songs
  const [songs, setSongs] = useState<Song[]>([]);

  // State to hold the current input values for the new song form
  const [newSong, setNewSong] = useState<Song>({ title: '', artist: '' });

  // Function to handle input changes and update the state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSong.title || !newSong.artist) {
      // Simple validation to ensure that both fields are filled
      alert("Please enter both a title and an artist for the song.");
      return;
    }
    // Add the new song to the songs list and reset the input fields
    setSongs([...songs, newSong]);
    setNewSong({ title: '', artist: '' });
  };

  return (
    <div>
      <h1>Music Playlist for Our Wedding</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Song Title:</label>
          <input type="text" id="title" name="title" value={newSong.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input type="text" id="artist" name="artist" value={newSong.artist} onChange={handleChange} />
        </div>
        <button type="submit">Add Song</button>
      </form>
      <h2>Playlist</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.title} by {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}
