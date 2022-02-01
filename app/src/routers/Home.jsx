import { Frame, Box } from "@components/Basic";

export default function Routers() {
  return (
    <Frame>
      <Box title="Welcome">
        Welcome to Snowsore.com
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Box>
    </Frame>
  );
}
