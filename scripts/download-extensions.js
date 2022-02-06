const fs = require("fs");
const axios = require("axios");

axios({
  url: "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
  headers: {
    accept: "application/json;api-version=7.1-preview.1;excludeUrls=true",
    "content-type": "application/json",
  },
  data: {
    assetTypes: null,
    filters: [
      {
        criteria: [{ filterType: 18, value: "joachimdalen" }],
      },
    ],
    flags: 512 | 2,
  },
  method: "POST",
})
  .then((res) => res.data)
  .then((res) => {
    console.log(res);
    const exte = res.results[0].extensions.map((ext) => {
      console.log(ext);
      return {
        title: ext.displayName,
        description: ext.shortDescription,
        currentVersion: ext.versions[0].version,
        image: ext.versions[0].files.find(
          (x) => x.assetType === "Microsoft.VisualStudio.Services.Icons.Default"
        )?.source,
        id: ext.extensionName,
        publisher: ext.publisher.publisherName,
      };
    });

    fs.writeFileSync(
      "./src/components/ExtensionSection/extensions.json",
      JSON.stringify(exte)
    );
    console.log("Writing file");
  })
  .catch((err) => console.error(err));
