export type LicenseStage = 'infer' | 'embed' | 'tune' | 'train';
export type Distribution = 'private' | 'public';

export interface LicenseInfo {
  url: string;
  license_found: boolean;
  action: 'allow' | 'deny' | 'unknown';
  distribution?: 'private' | 'public';
  price?: number;
  payto?: string;
  license_version_id?: number;
  license_sig?: string;
  license_type?: string;
  error?: string;
}

export interface UsageLogEntry {
  url: string;
  tokens: number;
  license_version_id?: number;
  license_sig?: string;
  stage: LicenseStage;
  distribution: Distribution;
  timestamp: string;
}

export interface LedgerAcquireResponse {
  licensed_url: string;
  license_version_id: number;
  license_sig: string;
  expires_at: string;
  cost: number;
  currency: string;
  stage: LicenseStage;
  distribution: Distribution;
  estimated_tokens: number;
  license_status: string;
  rate_per_1k_tokens: number;
}

export interface LicensedFetchResult {
  requested_url: string;
  final_url: string;
  status: number;
  content_type?: string | null;
  content_text?: string;
  payment_attempted: boolean;
  payment_required: boolean;
  x402?: {
    price?: string | null;
    payto?: string | null;
    stage?: string | null;
    distribution?: string | null;
    facilitator_url?: string | null;
  };
  acquire?: {
    licensed_url: string;
    cost: number;
    currency: string;
    expires_at: string;
    license_version_id: number;
    license_sig: string;
  };
  error?: string;
}

export interface LicenseTrackingSummary {
  total_urls: number;
  licensed_content: number;
  unlicensed_content: number;
  denied_content: number;
  total_tokens: number;
  tracking_enabled: boolean;
  errors: number;
}

export interface LicenseServiceConfig {
  apiUrl: string;
  apiKey?: string;
  licenseCheckTimeout: number;
  licenseAcquireTimeout: number;
  usageLogTimeout: number;
  enableTracking: boolean;
  enableCache: boolean;
  cacheTTL: number;
}
