import { server } from "./server";
import { PORT } from "./shared/config.env";

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
