import { Card, CardContent, Typography } from "@mui/material";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { StartupDTO } from "../../Types/Startup";

export default function StartupList(): ReactElement {
  const [startups, setStartups] = useState<Array<StartupDTO>>([]);

  useEffect(() => {
    fetchAllStartUp();
  }, []);

  const fetchAllStartUp = () => {
    StartupHttpService.getStartup()
      .then((response: any) => {
        setStartups(response);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  console.log(startups);
  console.log(typeof startups);

  return (
    <Fragment>
      {Object.keys(startups).map((keyName, i) => (
        <div key={i}>
          {startups[i]?.name ?
            (
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {startups[i].name}
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            )
            : null}
        </div>
        // <Card variant="outlined">{card}</Card>
      ))}
    </Fragment>
    // <Fragment>
    //   {Object.keys(startups).map((keyName, i) => (
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //       <Typography variant="h5" component="div">
    //       </Typography>
    //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //         adjective
    //       </Typography>
    //       <Typography variant="body2">
    //         well meaning and kindly.
    //         <br />
    //         {'"a benevolent smile"'}
    //       </Typography>
    //     </CardContent>
    //   ))}
    // </Fragment>
  );
}
