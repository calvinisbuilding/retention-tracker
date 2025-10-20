export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, contentId, contentName, action, percentageComplete } = req.body;
    
    try {
      const trackingData = {
        userId,
        contentId,
        contentName,
        action,
        percentageComplete,
        timestamp: new Date().toISOString()
      };
      
      console.log('Tracking event:', trackingData);
      
      res.status(200).json({ success: true, data: trackingData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
