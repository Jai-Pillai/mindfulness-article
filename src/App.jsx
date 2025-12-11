import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  // Logic (JavaScript) goes here

  return (
    // Structure (HTML/JSX) goes here
    <div className="container">
        <main>
          <head>
            <title>Mindfulness Article</title>
          </head>
          <div className="header-strip">
            <h1>Mindfulness Health Resources</h1>
            <a target="_blank" href="https://howdy.tamu.edu/main/">
            <img src="https://yt3.googleusercontent.com/Q3NQBQf8hqKI8bjw4yPDvvp6E2LQgD1O4nXQwva47SuG0Pwm2_YYHc9WJZ5YHFGQYE52IejpBQ=s900-c-k-c0x00ffffff-no-rj"
            alt="header-Logo" className="header-logo"></img>
            </a>
          </div>
          By Jai Pillai | 12/10/2025
          <p>Mindfulness is the state of being active and aware of the present. This awareness can help one shift away from a fight or
            flight response and move towards emotional regulation. 
          </p>
          <img src="https://free-images.com/lg/f95b/balance_meditation_meditate_silent.jpg" alt="sunset" className="article-image"></img>
          <figcaption>Image by <a target="_blank" href="https://pixabay.com/users/realworkhard-23566/">realworkhard</a> on Pixabay</figcaption>
          <p>Mindfulness techniques help one's body <strong>relax</strong>. Relaxation is the 
                physical and mental response that produces the feeling of calmness and serenity. 
                These techniques will help you be aware of two parts of yourself, your muscles and your breathing.</p>
          <section>
            <h2>Progressive Muscle Relaxation</h2>
            <details>
              <summary>
                <strong>Muscle Relaxation Exercise</strong>
              </summary>
                <p>Muscle relaxation helps one relax by putting the body in a state of muscular release and passivity.</p>
                <img src="https://cdn.pixabay.com/photo/2020/03/31/10/10/fitness-4986993_1280.jpg" alt="stretch" className="article-subimage"></img>
                <figcaption>Image by <a target="_blank" href="https://pixabay.com/users/u_91zgw5yq-10572844/">u_91zgw5yq</a> on Pixabay</figcaption>
                <h3>Muscle Relaxation Exercise</h3>
                <ol>
                  <li>Tense muscle, release tension, <em>feel the relaxation</em></li>
                  <ul>
                    <li>Use comfortable, private setting and clear distractions</li>
                    <li>Say "relax" out loud as you exhale</li>
                  </ul>
                  <li>Practive relaxation in an <em>anxiety-free situation</em>, then while experiencing <em>mild anxiety</em></li>
                  <ul>
                    <li>Practive relaxation before and during mildly axiety-provoking situations</li>
                    <li>Practive relaxation at several scheduled times daily</li>
                    <li>Being fully skilled is the ability to relax muscles without first using tension</li>
                  </ul>
                </ol>
              <h4>Common Problems</h4>
                <ol>
                  <li>Not practicing or applying techniques</li>
                  <ul>
                    <li>Practice for 20-30 minutes daily for 2 weeks</li>
                    <li>Relax frequenctly throughout the day</li>
                  </ul>
                  <li>Obstacles</li>
                  <ul>
                    <li>No place to relax</li>
                    <li>Feeling of boredom</li>
                    <li>Not enough time</li>
                  </ul>
                </ol>
                <p>The goal is to learn to recognize tension in the body and produce relaxation at the first
                  sign of tension. In time, anxiety will be replaced with relaxation. This makes avoiding uncomfortable
                  situations unnecessary.</p>
            </details>
          </section>
          <section>
            <h2>Breathing Techniques</h2>
            <details>
            <summary>
              <strong>Controlled Breathing</strong>
            </summary>
            <p>Breathing techniques can help calm one's body, including the nervous system. This can help put one's body in a state of
              relaxation. 4-7-8 breathing is one of these forms of controlled breathing.</p>
            <img src="https://cdn.pixabay.com/photo/2022/11/17/03/20/woman-7597270_1280.jpg" alt="stretch" className="article-subimage"></img>
            <figcaption>Image by <a target="_blank" href="https://pixabay.com/users/minhca-13887954/">MinhCah</a> on Pixabay</figcaption>
            <h3>4-7-8 Breathing</h3>
            <ol>
              <li><em>Inhale</em> through your nose for four seconds</li>
              <li><em>Hold</em> your breath for seven seconds</li>
              <li><em>Exhale</em> through your mouth for eight seconds</li>
            </ol>
            <h4>Tips</h4>
            <ol>
              <li>Start by doing as best you can safely</li>
              <li>Practice twice a day at least</li>
              <li>As you improve, relax frequenctly throughout the day</li>
            </ol>
            <p>Controlled breathing can calm one's mind, aid in sleep, and train one to relax in anxious situations.</p>
            </details>
          </section>
          <section>
          <h2>Resource Links</h2>
          <ul>
            <li><a target="_blank" href="https://www.verywellmind.com/how-do-i-practice-progressive-muscle-relaxation-3024400">Progressive Muscle Relaxation</a></li>
            <li><a target="_blank" href="https://health.clevelandclinic.org/4-7-8-breathing">4-7-8 Breathing</a></li>
          </ul>
          </section>
        </main>
        <footer>
          No copyright
        </footer>
    </div>
  );
}

export default App
