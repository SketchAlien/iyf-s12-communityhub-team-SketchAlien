import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Ivy - RentSmart User');
  const [bio, setBio] = useState('House hunter in Nairobi | Looking for a 1-bedroom in Westlands. Verified member.');

  return (
    <div className="profile-page">
      <nav className="navbar">
        <h1>Rent<span>Smart</span></h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#">Houses</a>
          <a href="#">Community</a>
          <a href="/profile" className="active">Profile</a>
        </div>
      </nav>
      <div className="container">
        <div className="profile-card">
          <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="avatar" />
          <h2>{name}</h2>
          <p className="role">Member of RentSmart Community</p>
          <p>📍 Nairobi, Kenya</p>
          <p className="bio">{bio}</p>
          <div className="stats">
            <div><strong>2</strong><span>Posts</span></div>
            <div><strong>12</strong><span>Saved Houses</span></div>
            <div><strong>4.8 ★</strong><span>Rating</span></div>
          </div>
          <button className="edit-btn" onClick={() => setEditing(!editing)}>
            {editing ? 'Close' : 'Edit Profile'}
          </button>
          {editing && (
            <div className="edit-form">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
              <input value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Your Bio" />
              <button className="save-btn" onClick={() => { setEditing(false); alert('Profile updated!'); }}>Save Changes</button>
            </div>
          )}
        </div>
        <div className="tabs">
          <button className={activeTab === 'posts' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('posts')}>My Posts</button>
          <button className={activeTab === 'saved' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('saved')}>Saved Houses</button>
          <button className={activeTab === 'team' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('team')}>Our Team</button>
        </div>
        {activeTab === 'posts' && (
          <div>
            <div className="post-card"><h3>🏠 1 Bedroom - Westlands</h3><p>Ksh 25,000 / month • Verified • Posted by You</p></div>
            <div className="post-card"><h3>🏠 Bedsitter - Roysambu</h3><p>Ksh 10,000 / month • Verified</p></div>
          </div>
        )}
        {activeTab === 'saved' && (
          <div>
            <div className="post-card"><h3>❤️ 2 Bedroom - Kilimani</h3><p>Ksh 55,000 / month • Saved</p></div>
            <div className="post-card"><h3>❤️ 1 Bedroom - Kileleshwa</h3><p>Ksh 30,000 / month • Saved</p></div>
          </div>
        )}
        {activeTab === 'team' && (
          <div className="team-grid">
            <div className="member"><strong>Benny - Leader</strong><br/>Project Setup / Layout / Nav</div>
            <div className="member"><strong>Philken</strong><br/>Responsive Design</div>
            <div className="member"><strong>Hannah</strong><br/>Authentication</div>
            <div className="member"><strong>Beatrice</strong><br/>Comment UI</div>
            <div className="member"><strong>Eunice</strong><br/>Profile API + User Model</div>
            <div className="member"><strong>Grace</strong><br/>Posts UI</div>
            <div className="member"><strong>Rahab</strong><br/>Register / Login UI</div>
            <div className="member"><strong>Collins</strong><br/>Database / Deployment</div>
            <div className="member"><strong>Wycliffe</strong><br/>Posts API</div>
            <div className="member"><strong>Zubeda</strong><br/>Comments API</div>
            <div className="member highlight"><strong>Ivy - YOU ✨</strong><br/>Profile Page UI</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default profile;
