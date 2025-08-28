'use client'

import { 
  hidePortfolioItems, 
  togglePortfolioItem, 
  showAllPortfolioItems, 
  getVisiblePortfolioImages,
  refreshPortfolioRandomization 
} from './portfolio-carousel'

export function PortfolioControls() {
  const handleHideItems = (itemIds: string[]) => {
    hidePortfolioItems(itemIds)
    // Force a re-render to see the changes
    setTimeout(() => window.location.reload(), 100)
  }

  const handleShowAll = () => {
    showAllPortfolioItems()
    // Force a re-render to see the changes
    setTimeout(() => window.location.reload(), 100)
  }

  const handleToggleItem = (itemId: string, hidden: boolean) => {
    togglePortfolioItem(itemId, hidden)
    // Force a re-render to see the changes
    setTimeout(() => window.location.reload(), 100)
  }

  return (
    <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Portfolio Controls</h3>
      
      <div className="space-y-4">
        {/* Quick Hide Examples */}
        <div>
          <h4 className="font-medium mb-2">Quick Hide Examples:</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleHideItems(['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31', '33'])}
              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Hide Odd IDs
            </button>
            <button
              onClick={() => handleHideItems(['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34'])}
              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Hide Even IDs
            </button>
            <button
              onClick={() => handleHideItems(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])}
              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Hide Original 12
            </button>
          </div>
        </div>

        {/* AI/Web3 Focus */}
        <div>
          <h4 className="font-medium mb-2">AI/Web3 Focus:</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleHideItems(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'])}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
            >
              Show Only AI/Web3
            </button>
            <button
              onClick={() => handleHideItems(['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'])}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
            >
              Hide AI/Web3
            </button>
            <button
              onClick={() => handleHideItems(['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'])}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
            >
              Show Only Original Work
            </button>
          </div>
        </div>

        {/* Individual Item Controls */}
        <div>
          <h4 className="font-medium mb-2">Individual Item Controls:</h4>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(id => (
              <button
                key={id}
                onClick={() => handleToggleItem(id.toString(), true)}
                className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
              >
                Hide {id}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map(id => (
              <button
                key={id}
                onClick={() => handleToggleItem(id.toString(), true)}
                className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
              >
                Hide {id}
              </button>
            ))}
          </div>
        </div>

        {/* Show All */}
        <div>
          <button
            onClick={handleShowAll}
            className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 font-medium"
          >
            Show All Portfolio Items
          </button>
        </div>

        {/* Info */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>💡 <strong>Tip:</strong> You now have 35 portfolio items! The AI/Web3 work (IDs 13-25) showcases your recent THINK, Souls, and Web3 projects.</p>
        </div>
      </div>
    </div>
  )
}
