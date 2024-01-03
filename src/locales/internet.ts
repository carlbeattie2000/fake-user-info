import { Base } from "../core/base";
import { UserAgent } from "../core/userAgents";
import { Internet } from "../types/locales";
import internetGlobalData from "../../src/data/internet.json";

export class InternetLocale extends Base {
  internetData: Internet;
  userAgentMethod: UserAgent;

  constructor(internetData: Internet) {
    super();

    this.userAgentMethod = new UserAgent();
    this.internetData = internetData;
  }

  IPV4(): string {
    return new Array(4)
      .fill(0)
      .map((_) => this.randomInt({ max: 255 }))
      .join(".");
  }

  IPV6(): string {
    return new Array(8)
      .fill(0)
      .map((_) => this.randomBytesString(2))
      .join(":");
  }

  domain(): string {
    return (
      this.randomArrayElement<string>(this.internetData.domainNames) +
      "." +
      this.randomArrayElement<string>(this.internetData.domains)
    );
  }

  url(): string {
    return `https://www.${this.domain()}`;
  }

  userAgent(): string {
    return this.userAgentMethod.generate();
  }

  http(): string {
    return this.randomArrayElement<string>(internetGlobalData.httpMethods);
  }

  port(): number {
    return this.randomInt({ max: 49151 });
  }

  isp(): string {
    return this.randomArrayElement<string>(this.internetData.isps);
  }
}
