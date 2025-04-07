import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
    function render(variables = {}) {
      console.log("These are the current variables: ", variables);
      
      // Cover logic
      let cover = variables.includeCover 
        ? `<div class="cover"><img src="${variables.background || ''}" /></div>`
        : "<div class='cover'></div>";
    
      // Name logic
      const fullName = [variables.name, variables.lastName]
        .filter(Boolean)
        .join(' ')
        .trim() || 'No name provided';
    
      // Role logic
      const role = variables.role || 'No role specified';
    
      // Location logic
      const location = [variables.city, variables.country]
        .filter(Boolean)
        .join(', ')
        .trim() || 'No location specified';
    
      // Social media logic
      const socialMedia = [
        { platform: 'twitter', username: variables.twitter },
        { platform: 'github', username: variables.github },
        { platform: 'linkedin', username: variables.linkedin },
        { platform: 'instagram', username: variables.instagram }
      ];
    
      const socialMediaLinks = socialMedia
        .filter(sm => sm.username)
        .map(sm => `
          <li>
            <a href="https://${sm.platform}.com/${sm.username}" target="_blank">
              <i class="fab fa-${sm.platform}"></i>
            </a>
          </li>
        `).join('');
    
      // Social media container
      const socialMediaContainer = socialMediaLinks 
        ? `<ul class="${variables.socialMediaPosition || 'position-right'}">${socialMediaLinks}</ul>`
        : '';
    
      // HTML output
      document.querySelector("#widget_content").innerHTML = `
        <div class="widget">
          ${cover}
          <img src="${variables.avatarURL || ''}" class="photo" />
          <h1>${fullName}</h1>
          <h2>${role}</h2>
          <h3>${location}</h3>
          ${socialMediaContainer}
        </div>
      `;
    }