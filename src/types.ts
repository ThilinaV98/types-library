export type TMarkAsBlocked = {
  uniqueCode: string;
  tenantId: string;
  token: string;
  reason: string;
};

export type TMarkAsResolved = {
  uniqueCode: string;
  tenantId: string;
  token: string;
};

export type TMarkAsInvalid = {
  uniqueCode: string;
  tenantId: string;
  token: string;
  reason: string;
};

export type TMarkAsValid = {
  uniqueCode: string;
  tenantId: string;
  token: string;
};