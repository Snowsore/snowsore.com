import { Frame, Box } from "@components/Basic";

export default function Routers() {
  return (
    <Frame>
      <Box title="Welcome">
        Welcome to Snowsore.com
        <br />
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Box>
    </Frame>
  );
}
