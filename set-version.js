import { exec } from "child_process";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Regular expression to allow formats like 1.0.0 or 1.0.0-canary.0
rl.question(
  "Enter the new version (e.g., 1.0.0 or 1.0.0-canary.0): ",
  (version) => {
    if (!version.match(/^\d+\.\d+\.\d+(-[a-z]+\.\d+)?$/)) {
      console.error("Invalid version format. Use x.y.z or x.y.z-tag.n format.");
      rl.close();
      process.exit(1);
    }

    exec(`npm version ${version}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error setting version: ${error.message}`);
        rl.close();
        return;
      }
      console.log(`Version set to ${version}`);
      rl.close();

      // Push the new version to the git repository
      exec("git push", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error pushing to git: ${error.message}`);
          return;
        }
        console.log("Changes pushed to git.");
      });
    });
  }
);
