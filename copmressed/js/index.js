function showLogo(){$("#image").animate({marginTop:"+=30",opacity:"1"},{duration:1500,complete:showGreeting})}function showGreeting(){var o=$(".greeting")[flag?1:0];window.screen.width<769&&flag?$(o).animate({opacity:"1"},{duration:1e3,complete:showFooter}):$(o).animate({marginLeft:"+=30",opacity:"1"},{duration:1e3,complete:flag?showFooter:showGreeting}),flag=!0}function showFooter(){$("#footer").animate({opacity:"1"},1200)}window.onload=showLogo;var flag=!1;