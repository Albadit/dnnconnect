# Slide 4 — Newsletters.ascx.cs

```csharp
private void SendMailAsynchronously(SendTokenizedBulkEmail email, out string message, ...)
{
    ownershipTransferred = false;
    // First send off a test message
    var strStartSubj = Localization.GetString("EMAIL_BulkMailStart_Subject.Text", ...);
    if (string.IsNullOrEmpty(strStartSubj)) strStartSubj = string.Format(strStartSubj, ...);

    var strStartBody = Localization.GetString("EMAIL_BulkMailStart_Body.Text", ...);
    if (string.IsNullOrEmpty(strStartBody)) strStartBody = string.Format(strStartBody, ...);

    var mailSettings = _mailSettings;
    var smtpServer = mailSettings.GetServer(PortalId);
    var smtpAuthentication = mailSettings.GetAuthentication(PortalId);
    var smtpUsername = mailSettings.GetUsername(PortalId);
    var smtpPassword = mailSettings.GetPassword(PortalId);
    var enableSmtpSsl = mailSettings.GetSecureConnectionEnabled(PortalId);

    var sendMailResult = Mail.SendMail(txtFrom.Text,
        txtFrom.Text,
        "",
        "",
        MailPriority.Normal,
        strStartSubj,
        MailFormat.Text,
        Encoding.UTF8,
        strStartBody, ...);

    if (string.IsNullOrEmpty(sendMailResult))
    {
        // Capture culture before transferring ownership.
        var culture = Thread.CurrentThread.CurrentCulture;
        var uiCulture = Thread.CurrentThread.CurrentUICulture;
        var objThread = new Thread(() => Components.NewsletterMailHelper.SendAndDispose(...));
        objThread.Start();
        ownershipTransferred = true;
        message = Localization.GetString("MessageSent", ...);
        messageType = ModuleMessage.ModuleMessageType.GreenSuccess;
    }
    else
    {
        message = string.Format(Localization.GetString("NoMessagesSentPlusError", ...), sendMailResult);
        messageType = ModuleMessage.ModuleMessageType.YellowWarning;
    }
}
```
