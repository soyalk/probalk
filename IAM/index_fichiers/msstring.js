function MSOWebPartPage_GetLocalizedStrings()
{
	var L_ResetPagePersonalizationDialog_TXT="You are about to reset all personalized Web Parts to their shared values and delete any private Web Parts. Click OK to complete this operation. Click Cancel to keep your personalized Web Part settings and private Web Parts.";
	var L_ResetPartPersonalizationDialog_TXT="Resetting this Web Part will cause you to lose any changes you made.  Are you sure you want to do this? To reset this Web Part, click OK. To keep your changes, click Cancel.";
	var L_RemoveConnection_TXT="Are you sure you want to remove the connection between the %0 Web Part and the %1 Web Part? To remove the connection, click OK. To keep the connection, click Cancel.";
	var L_ExportPersonalization_TXT="This Web Part Page has been personalized. As a result, one or more Web Part properties may contain confidential information. Make sure the properties contain information that is safe for others to read. After exporting this Web Part, view properties in the Web Part description file (.webpart or .dwp) by using a text editor, such as Microsoft Notepad.";
	var L_GetPropertiesFailure_ERR="Cannot retrieve properties at this time.";
	var L_SaveDirtyParts_TXT="Changes have been made to the contents of one or more Web Parts on this page. To save the changes, press OK.  To discard the changes, press Cancel.";
	var L_ToolPaneWidenToolTip_TXT="Widen";
	var L_ToolPaneShrinkToolTip_TXT="Narrow";
	var L_ToolPartExpandToolTip_TXT="Expand Toolpart: %0";
	var L_ToolPartCollapseToolTip_TXT="Collapse Toolpart: %0";
	var L_WebPartBackgroundColor_TXT="Web Part Background Color";
	var L_TransparentTooltip_TXT="Transparent Web Part Background Color";
	var L_InvalidURLPath_ERR="The URL is not valid for the %0 property. Check the URL spelling and path and try again.";
	var L_InvalidFolderPath_ERR="The path to the folder is not valid for the %0 property. Check the path name and try again.";
	var L_InvalidFilePath_ERR="The path to the file or folder is not valid. Check the path and try again.";
	var L_FileOrFolderUnsupported_ERR="The current browser does not support links to files or folders. To specify a link to a file or folder, you must use Microsoft Internet Explorer 5.0 or later";
	var L_Link_TXT="Link";
	var L_TransparentLiteral_TXT="Transparent";
	var L_ContentEditorSaveFailed_ERR="Cannot save your changes.";
	var L_AccessDenied_ERR="Access Denied saving Web Part properties: either the Web Part is embedded directly in the page, or you do not have sufficient permissions to save properties.";
	var L_NoInitArgs_ERR="Cannot create or modify the connection. One of the Web Parts does not have any data fields.";
	var s=new Object();
	s.ResetPagePersonalizationDialogText=L_ResetPagePersonalizationDialog_TXT;
	s.ResetPartPersonalizationDialogText=L_ResetPartPersonalizationDialog_TXT;
	s.RemoveConnection=L_RemoveConnection_TXT;
	s.ExportPersonalizationDialogText=L_ExportPersonalization_TXT;
	s.GetPropertiesFailure=L_GetPropertiesFailure_ERR;
	s.SaveDirtyPartsDialogText=L_SaveDirtyParts_TXT;
	s.ToolPaneWidenToolTip=L_ToolPaneWidenToolTip_TXT
	s.ToolPaneShrinkToolTip=L_ToolPaneShrinkToolTip_TXT;
	s.ToolPartExpandToolTip=L_ToolPartExpandToolTip_TXT;
	s.ToolPartCollapseToolTip=L_ToolPartCollapseToolTip_TXT;
	s.WebPartBackgroundColor=L_WebPartBackgroundColor_TXT;
	s.TransparentTooltip=L_TransparentTooltip_TXT;
	s.InvalidURLPath=L_InvalidURLPath_ERR;
	s.InvalidFolderPath=L_InvalidFolderPath_ERR;
	s.InvalidFilePath=L_InvalidFilePath_ERR;
	s.FileOrFolderUnsupported=L_FileOrFolderUnsupported_ERR;
	s.Link=L_Link_TXT;
	s.TransparentLiteral=L_TransparentLiteral_TXT;
	s.ContentEditorSaveFailed=L_ContentEditorSaveFailed_ERR;
	s.AccessDenied=L_AccessDenied_ERR;
	s.NoInitArgs=L_NoInitArgs_ERR;
	return s;
}
var MSOStrings=MSOWebPartPage_GetLocalizedStrings();
var L_AccessibleMenu_Text="Menu";

