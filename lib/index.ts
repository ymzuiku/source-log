const cwd = process.cwd() + "/";
const cwdReg = new RegExp(cwd + ".*(.ts)");
const nodeModulesReg = new RegExp("node_modules");

export function sourceLog(...args: any[]) {
  const err = new Error("");
  let line = "";
  err
    .stack!.split("\n")
    .reverse()
    .forEach((code) => {
      if (nodeModulesReg.test(code)) {
        return;
      }
      if (cwdReg.test(code)) {
        line = code.split(cwd)[1].replace(/(\(|\))/g, "");
      }
    });

  console.log(line);
  console.log(...args);
}

// export function souceLogStack(...args: any[]) {
//   const err = new Error("");
//   const logs: string[] = [];
//   err
//     .stack!.split("\n")
//     .reverse()
//     .forEach((code) => {
//       if (cwdReg.test(code)) {
//         logs.push(code.split(cwd)[1].replace(/(\(|\))/g, ""));
//       }
//     });

//   logs.forEach((v, i) => {
//     console.log(v);
//   });
//   console.log(...args);
// }
