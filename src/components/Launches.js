import { useQuery, gql } from '@apollo/client';
import './Launches.css';

const LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
        }
      details
      links {
        video_link
        }
    }
  }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log("LAUNCH_DATA ", data);

    return data.launches.map(({ launch_date_utc, launch_success, rocket, details, links }, index) => (
        <div key={index}>
            <h3>Lancement : {index}</h3>

            <table>
                <tr>
                    <td className="title">Date de lancement</td>
                    <td className="value">{ launch_date_utc }</td>
                </tr>
                <tr>
                    <td className="title">Status</td>
                    <td className="value">{launch_success ? `Launch ok` : 'Launch fucked up'}</td>
                </tr>
                <tr>
                    <td className="title">Launch blabla</td>
                    <td className="value">{ details ? details : "Zéro blabla, zéro tracas" }</td>
                </tr>
                <tr>
                    <td className="title">Rocket name</td>
                    <td className="value">{ rocket.rocket_name }</td>
                </tr>
                <tr>
                    <td className="title">YouTube</td>
                    <td className="value"><a href="{ links.video_link }">Voir le lancement { index }</a></td>
                </tr>
            </table>

        </div>
    ));
};

export default Launches;
