# Google Tag Manager Setup Guide

I've created a container file that automates 90% of the setup. You'll just need to create one tag manually (takes 30 seconds).

## Step 1: Import Container
1.  Go to **Admin** (top left tab in GTM).
2.  Under **Container**, click **Import Container**.
3.  **Choose container file**: Select `gtm_container.json` from your project folder (`c:\repo\personal-branding\`).
4.  **Choose workspace**: Select **Existing** -> **Default Workspace**.
5.  **Import Option**: Select **Merge** -> **Overwrite conflicting tags, triggers, and variables**.
6.  Click **Confirm**.

✅ This imports:
- 3 Data Layer Variables (Category, Action, Label)
- 1 Custom Event Trigger (listens for `custom_interaction`)

---

## Step 2: Create GA4 Tag (Manual - 30 seconds)
1.  Go to **Tags** in the left sidebar.
2.  Click **New**.
3.  **Name**: `GA4 - Custom Interaction`
4.  **Tag Configuration**: Choose **Google Analytics: GA4 Event**.
5.  **Measurement ID**: `G-ZRQ0FL03LW`
6.  **Event Name**: `interaction`
7.  **Event Parameters** (click "Add Row" 3 times):
    - Row 1: `category` = `{{DLV - Category}}`
    - Row 2: `action` = `{{DLV - Action}}`
    - Row 3: `label` = `{{DLV - Label}}`
8.  **Triggering**: Click and select **Custom Interaction Event**.
9.  Click **Save**.

---

## Step 3: Publish
1.  Click **Submit** in the top right.
2.  Give it a version name (e.g., "Imported Custom Tracking").
3.  Click **Publish**.

**Done!** Your tracking is now live.
