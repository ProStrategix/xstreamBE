
async function getChannelLogos(channel) {
    // Convert the channel name into lowercase and replace spaces with underscores
    const channelKey = channel.toLowerCase().replace(/\s/g, '_');
    
    // Define the SVG and PNG file paths
    const svgUrl = `../../public/logos/${channelKey}.svg`;
    const pngUrl = `../../public/logos/${channelKey}.png`;

    // Check if the SVG file exists, otherwise fallback to the PNG file
    if (await fileExists(svgUrl)) {
        return svgUrl; // Prefer SVG if it exists
    } else if (await fileExists(pngUrl)) {
        return pngUrl; // Fallback to PNG if SVG does not exist
    } else {
        return ''; // Return an empty string if neither file exists
    }
}

// Helper function to check file existence
async function fileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok; // True if the file exists
    } catch {
        return false; // False if an error occurs
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Data for table rows
    const opbasicChannels = [
        "EPG",
        "HOTINFO",
        "OPINFO",
        "GL45",
        "GATORS",
        "WDSC15",
        "PBS24",
        "CREATE",
        "GRIT",
        "COMET",
        "CHARGE",
        "YTA",
        "SUPERCH",
        "ION",
        "IONPLUS",
        "WEFS",
        "ARTS",
        "PBSKIDS",
        "NEWS",
        "FSTV"
      ];
      

    const opbasicChannelsNos = [
        "1.11",
        "1.11",
        "1.12",
        "4.5",
        "10.1",
        "15.1",
        "24.1",
        "24.2",
        "26.1",
        "26.3",
        "26.4",
        "47.1",
        "55.1",
        "56.1",
        "56.4",
        "68.1",
        "68.2",
        "293.1",
        "363.1",
        "363.2"
      ];
      

    const choiceChannels = [
        "WESH2",
        "METV",
        "STORY",
        "CBS6",
        "DABL",
        "COZI",
        "START",
        "ABC9",
        "LAFF",
        "MYSTERY",
        "CW18",
        "TCN",
        "CITY27",
        "COURT",
        "AMCRIME",
        "FOX35",
        "BUZZR",
        "FOXWX",
        "GETTV",
        "QUEST",
        "FOX51",
        "MOVIES!",
        "CATCHY",
        "BOUNCE",
        "FOX35+",
        "H&I",
        "THEGRIO",
        "SHOPLC",
        "JTV",
        "SHOPHQ",
        "GEM",
        "HSN",
        "HSN2",
        "QVC",
        "QVC2",
        "QVC3",
        "3ABN",
        "JBS",
        "POSITIV",
        "DAYSTAR",
        "EWTN",
        "INSPIRE",
        "TBN",
        "GODTV",
        "BYU",
        "GEBTV",
        "METOONS",
        "SMILE",
        "3ABN Kids",
        "FMC",
        "FETV",
        "ZLIVING",
        "MERIT",
        "CGTNEWS",
        "NHK",
        "CGTNDOC"
      ]
      

    const choiceChannelsNos = [
        "2.1",
        "2.2",
        "2.3",
        "6.1",
        "6.2",
        "6.3",
        "6.4",
        "9.1",
        "9.2",
        "9.3",
        "18.1",
        "18.2",
        "27.1",
        "27.2",
        "31.4",
        "35.1",
        "35.2",
        "35.3",
        "43.2",
        "43.5",
        "51.1",
        "51.2",
        "51.4",
        "56.2",
        "65.1",
        "65.3",
        "65.4",
        "70.1",
        "71.1",
        "72.1",
        "74.1",
        "75.1",
        "76.1",
        "77.1",
        "78.1",
        "79.1",
        "80.1",
        "81.1",
        "82.1",
        "83.1",
        "84.1",
        "85.1",
        "86.1",
        "87.1",
        "88.1",
        "89.1",
        "297.1",
        "298.1",
        "299.1",
        "309.1",
        "310.1",
        "317.1",
        "365.1",
        "366.1",
        "381.1",
        "384.1"
      ]
                              


    const preferredChannels = [
        "TRVL",
        "DISCOVR",
        "OWN",
        "TLC",
        "NATGEO",
        "ANIMAL",
        "ID",
        "DISNEY",
        "DFAMILY",
        "UNIKIDS",
        "CARTOON",
        "FF",
        "MAINST",
        "AMGTV",
        "HALLMRK",
        "HMYSTERY",
        "HFAMILY",
        "INSP",
        "TFC",
        "BIZTV",
        "CSPAN",
        "CSPAN2",
        "CSPAN3",
        "EARTHX",
        "TRT",
        "CNBC",
        "MSNBC",
        "CNN",
        "HLN",
        "FOXBUS",
        "FOXNEWS",
        "TWC",
        "ESPN",
        "ESPN2",
        "FS1",
        "RNTV",
        "NFL",
        "MLB",
        "NHL",
        "NBA",
        "GOLF",
        "MOTOR"
      ];
      

    const preferredChannelsNos = [
        "277.1",
        "278.1",
        "279.1",
        "280.1",
        "281.1",
        "282.1",
        "285.1",
        "290.1",
        "294.1",
        "295.1",
        "296.1",
        "301.1",
        "307.1",
        "311.1",
        "312.1",
        "313.1",
        "314.1",
        "318.1",
        "348.1",
        "349.1",
        "350.1",
        "350.2",
        "350.3",
        "351.1",
        "352.1",
        "355.1",
        "356.1",
        "357.1",
        "358.1",
        "359.1",
        "360.1",
        "362.1",
        "600.1",
        "603.1",
        "604.1",
        "608.1",
        "620.1",
        "621.1",
        "622.1",
        "623.1",
        "625.1",
        "631.1"
      ];
                              
      const expandedChannels = [
        "DLIFE",
        "CRIME",
        "MHC",
        "AHC",
        "DAMERICA",
        "MYDEST",
        "AWE",
        "NGW",
        "SCIENCE",
        "PETS",
        "DISNJR",
        "DISNXD",
        "ESTV",
        "LRW",
        "GFAM",
        "GLIV",
        "UPTV",
        "FUSE",
        "BLOOM",
        "DW",
        "CNBCW",
        "NEWSMAX",
        "OAN",
        "TAC",
        "ANT1",
        "ESPNEWS",
        "ESPNU",
        "FS2",
        "B1G",
        "SEC",
        "ACCN",
        "CARS",
        "RFDTV",
        "MAGNOLI",
        "COOK",
        "RECIPE",
        "REELZ",
        "COMEDY",
        "SONY",
        "FXM"
      ]
      
      const expandedChannelsNos =[
        "261.1",
        "267.1",
        "268.1",
        "272.1",
        "274.1",
        "275.1",
        "276.1",
        "283.1",
        "284.1",
        "286.1",
        "291.1",
        "292.1",
        "308.1",
        "315.1",
        "326.1",
        "327.1",
        "338.1",
        "339.1",
        "353.1",
        "354.1",
        "355.2",
        "361.1",
        "364.1",
        "382.1",
        "383.1",
        "601.1",
        "602.1",
        "605.1",
        "610.1",
        "611.1",
        "612.1",
        "630.1",
        "640.1",
        "230.1",
        "232.1",
        "233.1",
        "238.1",
        "249.1",
        "257.1",
        "258.1"
      ]
      
  
    // Get the table body element
    const tbody = document.querySelector("#channelTable tbody");
  
    // Populate the table body with rows
    opbasicChannels.forEach((channel,index )=> {
        // console.log(lifelineChannelsNos[channel])
        const row = document.createElement("tr");
        row.setAttribute('class','opbasic-row');
        // Channel column
        const channelCell = document.createElement("td");
        const img = document.createElement("img");
        getChannelLogos(channel).then((logoUrl) => {
            img.src = logoUrl ; // Use a default logo if none found
           
        });
        img.alt = channel;
        channelCell.appendChild(img);
        row.appendChild(channelCell);
  
        // Other columns (Lifeline, Basic, Get Both)
        const nos = document.createElement("td");
        nos.textContent = opbasicChannelsNos[index];
        row.appendChild(nos);
        const opbasic = document.createElement("td");
        opbasic.textContent ="✔";
        row.appendChild(opbasic);
        const choice = document.createElement("td");
        choice.textContent ="✔";
        row.appendChild(choice);
        const preferred = document.createElement("td");
        preferred.textContent ="✔";
        row.appendChild(preferred);
        const expanded = document.createElement("td");
        expanded.textContent ="✔";
        row.appendChild(expanded);
        // const both = document.createElement("td");
        // both.textContent ="✔";
        // row.appendChild(both);
      
  
        // Append the row to the table body
        tbody.appendChild(row);
    });
  
    choiceChannels.forEach((channel,index )=> {
        // console.log(lifelineChannelsNos[channel])
        const row = document.createElement("tr");
        row.setAttribute('class','choice-row');
        // Channel column
        const channelCell = document.createElement("td");
        const img = document.createElement("img");
        getChannelLogos(channel).then((logoUrl) => {
            img.src = logoUrl ; // Use a default logo if none found
           
        });
        img.alt = channel;
        channelCell.appendChild(img);
        row.appendChild(channelCell);
  
        // Other columns (Lifeline, Basic, Get Both)
        const nos = document.createElement("td");
        nos.textContent = choiceChannelsNos[index];
        row.appendChild(nos);
        const opbasic = document.createElement("td");
        opbasic.textContent ="—";
        row.appendChild(opbasic);
        const choice = document.createElement("td");
        choice.textContent ="✔";
        row.appendChild(choice);
        const preferred = document.createElement("td");
        preferred.textContent ="✔";
        row.appendChild(preferred);
        const expanded = document.createElement("td");
        expanded.textContent ="✔";
        row.appendChild(expanded);
        // const both = document.createElement("td");
        // both.textContent ="✔";
        // row.appendChild(both);
      
  
        // Append the row to the table body
        tbody.appendChild(row);
    });

    preferredChannels.forEach((channel,index )=> {
        // console.log(lifelineChannelsNos[channel])
        const row = document.createElement("tr");
        row.setAttribute('class','preferred-row');
        // Channel column
        const channelCell = document.createElement("td");
        const img = document.createElement("img");
        getChannelLogos(channel).then((logoUrl) => {
            img.src = logoUrl ; // Use a default logo if none found
           
        });
        img.alt = channel;
        channelCell.appendChild(img);
        row.appendChild(channelCell);
  
        // Other columns (Lifeline, Basic, Get Both)
        const nos = document.createElement("td");
        nos.textContent = preferredChannelsNos[index];
        row.appendChild(nos);
        const opbasic = document.createElement("td");
        opbasic.textContent ="—";
        row.appendChild(opbasic);
        const choice = document.createElement("td");
        choice.textContent ="—";
        row.appendChild(choice);
        const preferred = document.createElement("td");
        preferred.textContent ="✔";
        row.appendChild(preferred);
        const expanded = document.createElement("td");
        expanded.textContent ="✔";
        row.appendChild(expanded);
        // const both = document.createElement("td");
        // both.textContent ="✔";
        // row.appendChild(both);
      
  
        // Append the row to the table body
        tbody.appendChild(row);
    });
    expandedChannels.forEach((channel,index )=> {
        // console.log(lifelineChannelsNos[channel])
        const row = document.createElement("tr");
        row.setAttribute('class','expanded-row');
        // Channel column
        const channelCell = document.createElement("td");
        const img = document.createElement("img");
        getChannelLogos(channel).then((logoUrl) => {
            img.src = logoUrl ; // Use a default logo if none found
           
        });
        img.alt = channel;
        channelCell.appendChild(img);
        row.appendChild(channelCell);
  
        // Other columns (Lifeline, Basic, Get Both)
        const nos = document.createElement("td");
        nos.textContent = expandedChannelsNos[index];
        row.appendChild(nos);
        const opbasic = document.createElement("td");
        opbasic.textContent ="—";
        row.appendChild(opbasic);
        const choice = document.createElement("td");
        choice.textContent ="—";
        row.appendChild(choice);
        const preferred = document.createElement("td");
        preferred.textContent ="—";
        row.appendChild(preferred);
        const expanded = document.createElement("td");
        expanded.textContent ="✔";
        row.appendChild(expanded);
        // const both = document.createElement("td");
        // both.textContent ="✔";
        // row.appendChild(both);
      
  
        // Append the row to the table body
        tbody.appendChild(row);
    });
// Get all clickable th elements
const toggleHeaders = document.querySelectorAll('.toggle');

// Add event listeners to each th element
toggleHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Get the target group from the data-target attribute
        const targetGroup = this.getAttribute('data-target');
        
        // Find all rows with the class corresponding to the target group
        const rows = document.querySelectorAll(`.${targetGroup}`);
        
        let firstVisibleRow = null; // To store the first visible row
        
        // Toggle the visibility of each row in the group
        rows.forEach(row => {
            if (row.style.display === '' || row.style.display === 'none') {
                row.style.display = 'table-row'; // Show the row
                if (!firstVisibleRow) {
                    firstVisibleRow = row; // Set the first visible row
                }
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });

        // Scroll to the first visible row in the group, if found
        if (firstVisibleRow) {
            
            firstVisibleRow.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'center' // Align to the center of the viewport
            });
        }
    });
});



  });
  
  
 