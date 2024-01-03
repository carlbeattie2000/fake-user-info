/* eslint-disable */

import { versions } from "process";
import { Base } from "./base";

// Copyright (c) 2012-2014 Jeffrey Mealo

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
// Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
// WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// ------------------------------------------------------------------------------------------------------------------------

// Based loosely on Luka Pusic's PHP Script: http://360percents.com/posts/php-random-user-agent-generator/

// The license for that script is as follows:

// "THE BEER-WARE LICENSE" (Revision 42):

// <pusic93@gmail.com> wrote this file. As long as you retain this notice you can do whatever you want with this stuff.
// If we meet some day, and you think this stuff is worth it, you can buy me a beer in return. Luka Pusic

// Modified by Carl Beattie, quickly fixed up for typescript, this version does not follow the weighted random functionality

export class UserAgent extends Base {
  private version_string: { [key: string]: (v?: string) => unknown };
  private browser: { [key: string]: (v?: string) => string };

  constructor() {
    super();

    this.version_string = {
      net: () => {
        return [
          this.randomInt({ min: 1, max: 4 }),
          this.randomInt({ max: 9 }),
          this.randomInt({ min: 10000, max: 99999 }),
          this.randomInt({ max: 9 }),
        ].join(".");
      },
      nt: () => {
        return (
          this.randomInt({ min: 5, max: 6 }).toString() +
          "." +
          this.randomInt({ max: 3 }).toString()
        );
      },
      ie: () => {
        return this.randomInt({ min: 7, max: 11 });
      },
      trident: () => {
        return (
          this.randomInt({ min: 3, max: 7 }).toString() +
          "." +
          this.randomInt({ max: 1 })
        );
      },
      osx: (delim: string | undefined) => {
        return [
          10,
          this.randomInt({ min: 5, max: 10 }),
          this.randomInt({ max: 9 }),
        ].join(delim || ".");
      },
      chrome: () => {
        return [
          this.randomInt({ min: 13, max: 39 }),
          0,
          this.randomInt({ min: 800, max: 899 }),
          0,
        ].join(".");
      },
      presto: () => {
        return "2.9." + this.randomInt({ min: 160, max: 190 }).toString();
      },
      presto2: () => {
        return this.randomInt({ min: 10, max: 12 }).toString() + ".00";
      },
      safari: () => {
        return (
          this.randomInt({ min: 531, max: 538 }).toString() +
          "." +
          this.randomInt({ max: 2 }).toString() +
          "." +
          this.randomInt({ max: 2 })
        );
      },
    };

    this.browser = {
      firefox: (arch: string | undefined) => {
        const firefoxVersion =
          this.randomInt({ min: 5, max: 121 }).toString() +
          this.randomRevision(2);
        const geckoVersion = "Gecko/20100101 Firefox/" + firefoxVersion;
        const proc = this.randomProc(arch || "");
        const osVersion =
          arch === "win"
            ? "(Windows NT " +
              this.version_string.nt() +
              (proc ? "; " + proc : "")
            : arch === "mac"
              ? "(Macintosh; " + proc + " Mac OS X " + this.version_string.osx()
              : "(X11; Linux " + proc;

        return (
          "Mozilla/5.0 " +
          osVersion +
          "; rv:" +
          firefoxVersion.slice(0, -2) +
          ") " +
          geckoVersion
        );
      },
      iexplorer: () => {
        const version = this.version_string.ie() as number;

        if (version >= 11) {
          return (
            "Mozilla/5.0 (Windows NT 6." +
            this.randomInt({ min: 1, max: 1 }).toString() +
            "; Trident/7.0 " +
            this.randomArrayElement<string>(["Touch; ", ""]) +
            "rv:11.0) like Gecko"
          );
        }

        return (
          "Mozilla/5.0 (compatible; MSIE " +
          version +
          ".0; Windows NT " +
          this.version_string.nt() +
          "; Trident/" +
          this.version_string.trident() +
          (this.randomInt({ max: 1 }) === 1
            ? "; .NET CLR " + this.version_string.net()
            : "") +
          ")"
        );
      },
      opera: (arch: string | undefined) => {
        const presto_ver =
          " Presto/" +
          this.version_string.presto() +
          " Version/" +
          this.version_string.presto2() +
          ")";
        const os_ver =
          arch === "win"
            ? "(Windows NT " +
              this.version_string.nt() +
              "; U; " +
              this.randomLang() +
              presto_ver
            : arch === "lin"
              ? "(X11; Linux " +
                this.randomProc(arch) +
                "; U; " +
                this.randomLang() +
                presto_ver
              : "(Macintosh; Intel Mac OS X " +
                this.version_string.osx() +
                " U; " +
                this.randomLang() +
                " Presto/" +
                this.version_string.presto() +
                " Version/" +
                this.version_string.presto2() +
                ")";

        return (
          "Opera/" +
          this.randomInt({ min: 9, max: 14 }).toString() +
          "." +
          this.randomInt({ max: 99 }).toString() +
          " " +
          os_ver
        );
      },

      safari: (arch: string | undefined) => {
        const safari = this.version_string.safari();
        const ver =
          this.randomInt({ min: 4, max: 7 }).toString() +
          "." +
          this.randomInt({ max: 1 }).toString() +
          "." +
          this.randomInt({ max: 10 }).toString();
        const os_ver =
          arch === "mac"
            ? "(Macintosh; " +
              this.randomProc("mac") +
              " Mac OS X " +
              this.version_string.osx("_") +
              " rv:" +
              this.randomInt({ min: 2, max: 6 }).toString() +
              ".0; " +
              this.randomLang() +
              ") "
            : "(Windows; U; Windows NT " + this.version_string.nt() + ")";

        return (
          "Mozilla/5.0 " +
          os_ver +
          "AppleWebKit/" +
          safari +
          " (KHTML, like Gecko) Version/" +
          ver +
          " Safari/" +
          safari
        );
      },

      chrome: (arch: string | undefined) => {
        const safari = this.version_string.safari();
        const os_ver =
          arch === "mac"
            ? "(Macintosh; " +
              this.randomProc("mac") +
              " Mac OS X " +
              this.version_string.osx("_") +
              ") "
            : arch === "win"
              ? "(Windows; U; Windows NT " + this.version_string.nt() + ")"
              : "(X11; Linux " + this.randomProc(arch || "");

        return (
          "Mozilla/5.0 " +
          os_ver +
          " AppleWebKit/" +
          safari +
          " (KHTML, like Gecko) Chrome/" +
          this.version_string.chrome() +
          " Safari/" +
          safari
        );
      },
    };
  }

  private randomLang(): string {
    return this.randomArrayElement<string>([
      "AB",
      "AF",
      "AN",
      "AR",
      "AS",
      "AZ",
      "BE",
      "BG",
      "BN",
      "BO",
      "BR",
      "BS",
      "CA",
      "CE",
      "CO",
      "CS",
      "CU",
      "CY",
      "DA",
      "DE",
      "EL",
      "EN",
      "EO",
      "ES",
      "ET",
      "EU",
      "FA",
      "FI",
      "FJ",
      "FO",
      "FR",
      "FY",
      "GA",
      "GD",
      "GL",
      "GV",
      "HE",
      "HI",
      "HR",
      "HT",
      "HU",
      "HY",
      "ID",
      "IS",
      "IT",
      "JA",
      "JV",
      "KA",
      "KG",
      "KO",
      "KU",
      "KW",
      "KY",
      "LA",
      "LB",
      "LI",
      "LN",
      "LT",
      "LV",
      "MG",
      "MK",
      "MN",
      "MO",
      "MS",
      "MT",
      "MY",
      "NB",
      "NE",
      "NL",
      "NN",
      "NO",
      "OC",
      "PL",
      "PT",
      "RM",
      "RO",
      "RU",
      "SC",
      "SE",
      "SK",
      "SL",
      "SO",
      "SQ",
      "SR",
      "SV",
      "SW",
      "TK",
      "TR",
      "TY",
      "UK",
      "UR",
      "UZ",
      "VI",
      "VO",
      "YI",
      "ZH",
    ]);
  }

  private randomBrowserAndOS(): string[] {
    const browser = this.randomArrayElement<string>([
      "chrome",
      "iexplorer",
      "firefox",
      "safari",
      "opera",
    ]);
    const os = {
      chrome: ["win", "mac", "lin"],
      firefox: ["win", "mac", "lin"],
      opera: ["win", "mac", "lin"],
      safari: ["mac"],
      iexplorer: ["win"],
    };
    const osKey = browser as keyof typeof os;

    return [browser, this.randomArrayElement<string>(os[osKey])];
  }

  private randomProc(os: string): string {
    const procs = {
      lin: ["i686", "x86_64"],
      mac: ["Intel", "PPC", "U; Intel", "U; PPC", "M1", "M2", "M3"],
      win: ["WOW64", "Win64; x64"],
    };
    const procKey = os as keyof typeof procs;

    return this.randomArrayElement<string>(procs[procKey]);
  }

  private randomRevision(dots = 2): string {
    return new Array(dots)
      .map((_) => "." + this.randomInt({ max: 9 }).toString())
      .join("");
  }

  generate(): string {
    const browserAndOS = this.randomBrowserAndOS();

    return this.browser[browserAndOS[0]](browserAndOS[1]);
  }
}
